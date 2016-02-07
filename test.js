import test from 'ava';
import fn from './';

test('some beautiful marks', t => {
  t.is(fn('a -- b'), 'a \u2013 b');
  t.is(fn('a -- b'), 'a \u2013 b');
  t.is(fn('a --- b (tm) c'), 'a \u2014 b ™ c');
  t.is(fn('a --- "b (tm) c"'), 'a \u2014 “b ™ c”');
  t.is(fn('a --- \'b (tm) c\''), 'a \u2014 ‘b ™ c’');
	t.is(fn('he\'s neat'), 'he\u2019s neat');
});
