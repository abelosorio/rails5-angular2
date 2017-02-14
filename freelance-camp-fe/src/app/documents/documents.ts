export interface Document {
  // We're using snake_case because this app will be connected with
  // a Rails API.
  title:       string,
  description: string,
  file_url:    string,
  updated_at:  string,
  image_url:   string
}
