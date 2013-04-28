# credit to http://ruby-jokes.github.io/job_interview/pres.html#2
require 'pry'

class FizzBuzz

  def fizz_buzz(max)
    Array.new(max) do |i|
      j = i + 1
      val  = (j % 3 == 0 ? "Fizz" : "") +
      (j % 5 == 0 ? "Buzz" : "")
      val.empty? ?  j.to_s  : val
    end
  end

end

puts FizzBuzz.new.fizz_buzz(100)
