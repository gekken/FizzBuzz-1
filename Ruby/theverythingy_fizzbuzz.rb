# credit @theverythingy (Jeffrey Horn)
# source: https://gist.github.com/theverything/29d0b7b3e890eb3caf15 (via twitter)
#
(1..100).each do |number|
  output = ""
  output = "fizz" if number.%(3).zero?
  output += "buzz" if number.%(5).zero?
  output = number if output.empty?
  puts output
end
