__d(
  "WAWebDomPlayVideo",
  ["Promise"],
  function (t, n, r, o, a, i) {
    var e;
    function l(t) {
      var r = t.__playPromise;
      if (r && r != null) return r;
      var o = new (e || (e = n("Promise")))(function (e, n) {
        function r(n) {
          (t.removeEventListener("playing", r),
            t.removeEventListener("error", o),
            (!t.videoHeight || !t.videoWidth) && r(n),
            delete t.__playPromise,
            e());
        }
        function o(e) {
          (t.removeEventListener("playing", r),
            t.removeEventListener("error", o),
            delete t.__playPromise,
            n(e));
        }
        (t.addEventListener("playing", r), t.addEventListener("error", o));
        var a = t.play();
        s(a) &&
          (t.removeEventListener("playing", r),
          t.removeEventListener("error", o),
          a
            .then(function () {
              (delete t.__playPromise, e());
            })
            .catch(function (e) {
              (delete t.__playPromise, n(e));
            }));
      });
      return ((t.__playPromise = o), o);
    }
    function s(e) {
      return e && typeof e.then == "function";
    }
    i.default = l;
  },
  66,
);
