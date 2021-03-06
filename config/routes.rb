Rails.application.routes.draw do

  root 'index#home'

  get 'about' => 'index#about'
  get 'about/resume'
  get 'home' => 'index#home'
  
  get 'projects' => 'projects#home'
  get 'cheskers' => 'projects#cheskers'
  get 'jungmind' => 'projects#jungmind'
  get 'tasterly' => 'projects#tasterly'
  
end
