(1..100).each do |n|
  f = n % 3 == 0 ? "Fizz" : nil
  b = n % 5 == 0 ? "Buzz" : nil
  if (f || b)
    puts "#{f}#{b}"
  else
    puts n
  end
end
