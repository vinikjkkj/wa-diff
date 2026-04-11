__d(
  "WAWebShowMediaNotReadableModal",
  ["WAWebMediaNotReadableModal.react", "WAWebModalManager", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      e && (e.stopPropagation(), e.preventDefault());
    }
    function c(e) {
      (u(e),
        o("WAWebModalManager").ModalManager.open(
          s.jsx(r("WAWebMediaNotReadableModal.react"), {}),
        ));
    }
    l.default = c;
  },
  98,
);
