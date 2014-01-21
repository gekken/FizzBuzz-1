(1..100).each do |number|
  multiple_of_three = (number % 3) == 0
  multiple_of_five  = (number % 5) == 0
  multiple_of_both  = multiple_of_three && multiple_of_five
  if multiple_of_both
    puts "FizzBuzz"
  elsif multiple_of_three
    puts "Fizz"
  elsif multiple_of_five
    puts "Buzz"
  else
    puts number
  end
end

