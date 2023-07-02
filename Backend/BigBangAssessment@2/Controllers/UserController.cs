using BigBangAssessment_2.Interfaces;
using BigBangAssessment_2.Models;
using BigBangAssessment_2.Models.DTOs;
using BigBangAssessment_2.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace BigBangAssessment_2.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    [EnableCors("MyCors")]
    public class UserController : ControllerBase
    {
        
        private readonly IManageUser _manageUserService;
        private readonly IRepo<string, Doctor> _doctorRepo;
        private readonly IAdminService _adminService;
        private readonly IPatientService _patientService;

        public UserController(IManageUser manageUserService, IRepo<string, Doctor> doctorRepo)
        {
           
            _manageUserService = manageUserService;
            _doctorRepo = doctorRepo;
        }

        [HttpPost]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status201Created)]//Success Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]//Failure Response
        public async Task<ActionResult<UserDTO>> RegisterationForDoctor(DoctorRegisterDTO doctor)
        {
            
                var result = await _manageUserService.DoctorRegister(doctor);
                if (result != null)
                {
                   return Ok(result);
                }
                return BadRequest("Network error...Try again later");
            
        }

        [HttpPost]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status201Created)]//Success Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]//Failure Response
        public async Task<ActionResult<UserDTO>> RegisterationForPatient(Patient patient)
        {
            var result = await _manageUserService.PatientRegister(patient);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to register at this moment");
        }


        [HttpPost]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status201Created)]//Success Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]//Failure Response
        public async Task<ActionResult<UserDTO>> Login(UserDTO user)
        {
            var result = await _manageUserService.Login(user);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Invalid Id or Password");
        }
        
        [Authorize(Roles = "Admin")]
        [HttpGet]
        [ProducesResponseType(typeof(List<Doctor>), StatusCodes.Status201Created)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<ICollection<Doctor>>> GetDoctors()
        {
            try
            {
                var doctors = await _doctorRepo.GetAll();
                if (doctors != null)
                {
                    return Ok(doctors);
                }
                return BadRequest("No doctors available");
            }
            catch (Exception)
            {
                return BadRequest("Database error");
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpPut]
        [ProducesResponseType(typeof(Doctor), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response

        public async Task<ActionResult<Doctor?>> UpdateDoctorStatus(ChangeStatusDTO status)
        {
            try
            {
                var doctor = await _adminService.UpdateStatus(status);
                if (doctor != null)
                {
                    return Ok(doctor);
                }
                return BadRequest("Not updated!");
            }
            catch (Exception)
            {
                return BadRequest("Backend error");
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpPut]
        [ProducesResponseType(typeof(Doctor), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response

        public async Task<ActionResult<Doctor?>> UpdateDoctorDetails(Doctor doctor)
        {
            {
                try
                {
                    var doc = await _doctorRepo.Update(doctor);
                    if (doctor != null)
                    {
                        return Ok(doctor);
                    }
                    return BadRequest("Not updated!");
                }
                catch (Exception)
                {
                    return BadRequest("Backend error");
                }
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        [ProducesResponseType(typeof(Doctor), StatusCodes.Status201Created)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<ActionResult<Doctor>> GetDoctor(string name)
        {
            try
            {
                var doctor = await _doctorRepo.Get(name);
                if (doctor != null)
                {
                    return Ok(doctor);
                }
                return BadRequest("No doctor with that id");
            }
            catch (Exception)
            {
                return BadRequest("Database error");
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        [ProducesResponseType(typeof(Doctor), StatusCodes.Status201Created)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Doctor>> AddDoctor(Doctor doctor)
        {
            try
            {
                var doc = await _adminService.AddDoctor(doctor);
                if (doctor != null)
                {
                    return Ok(doc);
                }
                return BadRequest("Doctor already exists!");
            }
            catch (Exception)
            {
                return BadRequest("Backend error!");
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete]
        [ProducesResponseType(typeof(Doctor), StatusCodes.Status201Created)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Doctor>> DeleteDoctor(string name)
        {
            try
            {
                var doc = await _doctorRepo.Get(name);
                if (doc != null)
                {
                    return Ok(doc);
                }
                return BadRequest("No doctor found!");
            }
            catch (Exception)
            {
                return BadRequest("Backend error!");
            }
        }
        [Authorize(Roles = "Patient")]
        [HttpGet]
        [ProducesResponseType(typeof(List<DoctorListDTO>), StatusCodes.Status201Created)]//successResponse
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<DoctorListDTO>> GetDocSpec()
        {
            try
            {
                var doctors = await _patientService.GetDoctors();
                if (doctors != null)
                {
                    return Ok(doctors);
                }
                return BadRequest("No doctors found");
            }
            catch (Exception)
            {
                return BadRequest("Backend error");
            }
        }

    }
}
