def fizzbuzz(i)
  [[['Fizz'][i%3], ['Buzz'][i%5]].join].find(->{i}) {|i| i=~/./}
end

100.times { |i| puts fizzbuzz(i+1) }
