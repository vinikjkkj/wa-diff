__d(
  "FbtReactUtil",
  [],
  function (t, n, r, o, a, i) {
    var e =
        (typeof Symbol == "function" &&
          Symbol.for &&
          Symbol.for("react.transitional.element")) ||
        60103,
      l = !1;
    function s(e) {
      var t = { validated: !0 };
      l
        ? Object.defineProperty(e, "_store", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: t,
          })
        : (e._store = t);
    }
    ((i.REACT_ELEMENT_TYPE = e), (i.injectReactShim = s));
  },
  66,
);
