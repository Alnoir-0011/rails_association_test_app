import { Controller } from "@hotwired/stimulus"
import { initTagForm, tagInput, tagAutocomplete } from "../tag_input";
// Connects to data-controller="tag-form"
export default class extends Controller {
  connect() {
    initTagForm();
    // tagInput(); // if autocomplete off
    tagAutocomplete(); // if autocomplete on
  }
}
