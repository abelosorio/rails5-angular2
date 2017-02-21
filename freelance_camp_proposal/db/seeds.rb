10.times do |proposal|
  Proposal.create!(
    customer: "Customer #{proposal}",
    portfolio_url: 'http://www.google.com.ar',
    tools: 'Ruby on Rails, Angular2, and PostgreSQL',
    estimated_hours: (80 + proposal),
    hourly_rate: 120,
    weeks_to_complete: 12,
    client_email: 'client@example.com'
  )
end
