__d(
  "WAWebMediaUtils",
  ["WABinary"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return btoa(
        String.fromCharCode.apply(
          null,
          o("WABinary").Binary.build(e).readByteArrayView(),
        ),
      );
    }
    function s(t) {
      return "data:image/jpeg;base64," + e(t);
    }
    ((l.convertToBase64 = e), (l.convertToDataURI = s));
  },
  98,
);
