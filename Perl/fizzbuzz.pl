#! /usr/bin/perl
# As we all know, there is only one proper language for FizzBuzz, and only one graceful
# way to accomplish it, the Perl 'for' loop. HA!
#
# now I am tempted to Perl-golf the heck out of this....

for (1..100) {
    my $fizz = ($_ % 3 == 0)? "Fizz" : "";
    my $buzz = ($_ % 2 == 0)? "Buzz" : "";
    ($fizz ne '' || $buzz ne '') ? print "$fizz$buzz\n" : print "$_\n";
}
