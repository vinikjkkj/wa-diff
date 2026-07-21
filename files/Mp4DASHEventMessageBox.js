__d(
  "Mp4DASHEventMessageBox",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e, t) {
        ((this.$1 = t),
          (this.$2 = null),
          t.getVersion() == 0
            ? (this.$2 = {
                version: 0,
                schemeIdUri: e.readZeroTerminatedString(this.$4(e, t)),
                value: e.readZeroTerminatedString(this.$4(e, t)),
                timescale: e.readUint32(),
                presentationTimeDelta: e.readUint32(),
                eventDuration: e.readUint32(),
                id: e.readUint32(),
              })
            : t.getVersion() == 1 &&
              (this.$2 = {
                version: 1,
                timescale: e.readUint32(),
                presentationTime: e.readUint64(),
                eventDuration: e.readUint32(),
                id: e.readUint32(),
                schemeIdUri: e.readZeroTerminatedString(this.$4(e, t)),
                value: e.readZeroTerminatedString(this.$4(e, t)),
              }),
          (this.$3 = new DataView(e.getDataView().buffer, e.getCursor())));
      }
      var t = e.prototype;
      return (
        (t.getFullBox = function () {
          return this.$1;
        }),
        (t.getEmsgFields = function () {
          return this.$2;
        }),
        (t.getMessageData = function () {
          return this.$3;
        }),
        (t.getStartTime = function () {
          var e = this.$2;
          if (e == null) return null;
          switch (e.version) {
            case 0:
              return null;
            case 1:
              return this.$5(e);
          }
        }),
        (t.getDuration = function () {
          var e = this.$2;
          if (e == null) return null;
          var t = e.eventDuration,
            n = e.timescale;
          return n !== 0 ? t / n : t;
        }),
        (t.$5 = function (t) {
          var e = t.presentationTime,
            n = t.timescale;
          return n !== 0 ? e / n : e;
        }),
        (t.$4 = function (t, n) {
          return n.getBox().getSize() - (t.getCursor() - n.getBox().getStart());
        }),
        e
      );
    })();
    ((e.canonicalType = "emsg"), (i.default = e));
  },
  66,
);
