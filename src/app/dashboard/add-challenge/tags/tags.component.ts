import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input() allTags: string[] = [];
  @Output() tagsChange = new EventEmitter<string[]>();

  tags: string[] = [];
  tagInput: string = '';
  filteredSuggestions: string[] = [];
addTag() {
    if (this.tagInput && !this.tags.includes(this.tagInput)) 
    {
      this.tags.push(this.tagInput);
      this.tagInput = '';
      this.emitTags();
    }
}

removeTag(tag: string) {
  this.tags = this.tags.filter((t) => t !== tag);
    this.emitTags();
}

  emitTags() 
  {
    this.tagsChange.emit([...this.tags]);
  }

selectSuggestion(suggestion: string) {
    this.tagInput = suggestion;
    this.addTag();
}

filterTags() {
    this.filteredSuggestions = this.allTags.filter(tag =>
    tag.toLowerCase().includes(this.tagInput.toLowerCase())
    );
}
}
