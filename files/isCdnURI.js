__d(
  "isCdnURI",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e.getProtocol() !== "http" && e.getProtocol() !== "https") return !1;
      var t = Number(e.getPort());
      return t && t !== 80 && t !== 443
        ? !1
        : e.isSubdomainOfDomain("fbcdn.net");
    }
    i.default = e;
  },
  66,
);
