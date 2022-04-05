package backend.poc1.project.POC1Backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class APIController {
	
	@Autowired
	ResoureService Service;
	
	@PostMapping("/sam")
	public String makeCreate(@RequestBody Resource res)
	{
		 return Service.create(res).getResName()+"has recurited ";
	}
	

}