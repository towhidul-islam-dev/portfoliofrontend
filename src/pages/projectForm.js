import React from "react";

const ProjectForm = () => {
  return (
    <>
      <div class="project_form">
        <h2 class="form_title">Project Form</h2>
        <form class="single_data">
          <div class="input_area proj_icon">
            <label for="icon">Icon</label>
            <input
              type="text"
              name="icon"
              class="input_icon"
              placeholder="e.g fas/fab fa-icon"
            />
          </div>
          <div class="input_area proj_name">
            <label for="projectName">Proj. Name</label>
            <input
              type="text"
              name="title"
              class="input_Name"
              placeholder="enter project name"
            />
          </div>
          <div class="input_area project_ctg">
            <label for="projCategory">Proj. Ctry</label>
            <input
              type="text"
              name="category"
              class="input_ctg"
              placeholder="enter project ctry"
            />
          </div>
          <div class="input_area proj_desc">
            <label for="projectDescription">Proj. Desc</label>
            <input
              type="text"
              name="description"
              class="input_desc"
              placeholder="enter proj desc"
            />
          </div>
          <div class="input_area proj_link">
            <label for="sourceCode link">source</label>
            <input
              type="text"
              name="sourceLink"
              class="input_sourcecode"
              placeholder="enter source link"
            />
          </div>
          <div class="input_area proj_git">
            <label for="githublink">GitHub</label>
            <input
              type="text"
              name="gitHub"
              class="input_gitHub"
              placeholder="enter github link"
            />
          </div>

          <div class="button_continer">
            <button class="submit_btn ripple_btn" type="submit">
              submit
            </button>
          </div>
          <div class="form_alert"></div>
        </form>
      </div>
    </>
  );
};

export default ProjectForm;
