__d(
  "WAWebOmittedMetadataNoticeEvents",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WAWebEventEmitter"))();
    function s() {
      e.trigger("change");
    }
    ((l.omittedMetadataNoticeEvents = e), (l.notifyOmittedMetadataStored = s));
  },
  98,
);
