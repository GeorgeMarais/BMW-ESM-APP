using BMW_ESM_APP_API.Models.Entities;
using BMW_ESM_APP_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BMW_ESM_APP_API.ViewModels
{
  public class ClientViewModel
  {
    public int ClientID { get; set; }
    public string First_Name { get; set; }
    public string Last_Name { get; set; }
    public string Phone_Number { get; set; }
    public string Email { get; set; }
    public DateTime Registration_Date { get; set; }
    public DateTime Last_Update { get; set; }
    public virtual AppUser UserID { get; set; }
    public virtual Address AddressID { get; set; }
    public virtual Title TitleID { get; set; }
    public virtual Client_Type ClientTypeID { get; set; }
  }
}
