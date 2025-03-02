import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get("/")
  @Render('index')
  index() {}

  @Get("/about")
  @Render('about')
  about() {
    const viewData = {
      description: "This is an about page ...",
      author: "Developed by: Ahmad mohammadi"
    };

    const data1 = 'About us - Online Store';
    
    return {
      title: data1,
      subtitle: "About us",
      viewData: viewData
    };
  }
}


