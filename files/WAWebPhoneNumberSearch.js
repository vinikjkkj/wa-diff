__d(
  "WAWebPhoneNumberSearch",
  [],
  function (t, n, r, o, a, i) {
    var e = /^[0-9+()\- ]+$/;
    function l(t) {
      return e.test(t);
    }
    function s(e) {
      return l(e) ? e.replace(/[^0-9]/g, "") : null;
    }
    ((i.isPhoneNumberLike = l), (i.numberSearch = s));
  },
  66,
);
