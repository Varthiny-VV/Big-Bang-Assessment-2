using BigBangAssessment_2.Interfaces;
using BigBangAssessment_2.Models;
using BigBangAssessment_2.Models.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BigBangAssessment_2.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        
        private readonly IManageUser _manageUserService;

        public UserController(IManageUser manageUserService)
        {
           
            _manageUserService = manageUserService;
        }

        [HttpPost]
        public async Task<ActionResult<UserDTO>> RegisterationForDoctor(Doctor doctor)
        {
            var result = await _manageUserService.DoctorRegister(doctor);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to register at this moment");
        }

        [HttpPost]
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
        public async Task<ActionResult<UserDTO>> Login(UserDTO user)
        {
            var result = await _manageUserService.Login(user);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Invalid Id or Password");
        }
        [HttpPost]
        public async Task<ActionResult<Doctor>> ApproveDoctorStatus(string name)
        {
            var approveResult = await _manageUserService.ApproveStatus(name);
            if (approveResult != null)
            {
                return Ok(approveResult);
            }
            return BadRequest("Unable to change");
        }
    }
}
