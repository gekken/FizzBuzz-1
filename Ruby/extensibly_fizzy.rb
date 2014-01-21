require "active_support/core_ext/object/blank"

MAX  = 100
ALTS = { Fizz: 3, Buzz: 5, Pox: 6 }

class Fixnum
  def to_fb
    ALTS.map{ |k,v| k if modulo(v).zero? }.join.presence || self
  end
end

MAX.times { |i| puts i.to_fb }
