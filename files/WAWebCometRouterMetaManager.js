__d(
  "WAWebCometRouterMetaManager",
  ["WAWebPwaDocumentMetadataUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "",
      s = null;
    function u() {
      var t = s != null ? " \u2013 " + s : "";
      o("WAWebPwaDocumentMetadataUtils").setDocumentTitle("" + e + t);
    }
    function c(t) {
      ((e = t), u());
    }
    function d(e) {
      s !== e && ((s = e), u());
    }
    ((l.updateUnreadTitle = c), (l.updateRouteTitle = d));
  },
  98,
);
