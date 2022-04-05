package backend.poc1.project.POC1Backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResoureService {
	@Autowired//respository,service,bean,component,controller
	ResourceRepository repo;
	
 public Resource create(Resource resource) {
	 return repo.save(resource);
	 
 }
	
	
	
	
	
	

}
