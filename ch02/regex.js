const l = console.log;
(() => {
  return;
  console.log(/𝄞/.test('𝄞-clef'));
  let result = /^.-clef/.test('𝄞-clef');
  l(result);
  result = /^.-clef/u.test('𝄞-clef');
  l(result);

  var re = /^foo/y,
    str = 'foo';

  re.test(str);
  l(re.lastIndex);
  re.test(str);
  l(re.lastIndex);

  re.lastIndex = 1;
  re.test(str);
  l(re.lastIndex);

  var re2 = /foo/y,
    str = '++foo++';
  l('re2 lastindex', re2.lastIndex);
  l(re.test(str));

  re2.lastIndex = 2;
  re2.test(str);
  l(re2.lastIndex);

  re2.test(str);
  l(re2.lastIndex);
})();

(() => {
  return;
  var re = /f../y,
    str = 'foo       far       fad';

  l(str.match(re));
  l(re.lastIndex);

  re.lastIndex = 10;
  l(str.match(re));

  re.lastIndex = 20;
  l(str.match(re));
})();

(() => {
  return;
  var re = /\d+\.\s(.*?)(?:\s|$)/y,
    str = '1. foo 2. bar 3. baz';

  l(str.match(re));
  l(re.lastIndex);
  l(str.match(re));
  l(re.lastIndex);
  l(str.match(re));
  l(re.lastIndex);
})();

(() => {
  var re = /o+./g,
    str = 'foot book more';

  l(re.exec(str), re.lastIndex);
  l(re.exec(str), re.lastIndex);
  l(re.exec(str), re.lastIndex);
  l(re.exec(str), re.lastIndex);
})();
