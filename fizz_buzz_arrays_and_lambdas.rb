def fizzbuzz(n)
  [[['Fizz'][n%3],['Buzz'][n%5]].join].find(->{n}){|n| !n.empty?}
end

# e.g.:
# 100.times{|n| print fizzbuzz(n), ' '}

require 'minitest/autorun'

# total overkill
class TestFizzBuzz < MiniTest::Unit::TestCase

  def test_three_should_return_fizz
    assert_equal "Fizz", fizzbuzz(3)
  end

  def test_multiples_of_three_should_return_fizz
    assert_equal "Fizz", fizzbuzz(12)
  end

  def test_five_should_return_buzz
    assert_equal "Buzz", fizzbuzz(5)
  end

  def test_multiples_of_five_should_return_buzz
    assert_equal "Buzz", fizzbuzz(20)
  end

  def test_fifteen_should_return_fizzbuzz
    assert_equal "FizzBuzz", fizzbuzz(15)
  end

  def test_seven_should_return_seven
    assert_equal 7, fizzbuzz(7)
  end
end

