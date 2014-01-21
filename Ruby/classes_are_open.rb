# never never do this

class Fixnum
  def fizzbuzz
    # you could use any version of fizzbuzz here
    [[['Fizz'][self%3],['Buzz'][self%5]].join].find(lambda{self}){|n| !n.empty?}
  end
end

# Now you can use symbol to proc in a map or something!
puts (1..100).map(&:fizzbuzz).join(', ')
