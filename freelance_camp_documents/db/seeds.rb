# FreelanceDocuments
10.times do |d|
  FreelanceDocument.create!(
    title: "Document #{d}",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ' +
                 'do eiusmod tempor incididunt ut labore et dolore manga aliqua.' +
                 'Ut enim ad minim veniam, quis nostrud exercitation',
    file_url: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
    image_url: 'https://s3.amazonaws.com/devcamp-static/images/freelance-img.jpg'
  )
end
