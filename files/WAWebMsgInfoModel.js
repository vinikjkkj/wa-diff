__d(
  "WAWebMsgInfoModel",
  [
    "WAWebBaseModel",
    "WAWebCollection",
    "WAWebContactCollection",
    "WAWebContactComparator",
    "WAWebMsgInfoCollection",
    "WAWebMsgInfoGetters",
    "WAWebMsgKey",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.id = o("WAWebBaseModel").prop()),
            (t.t = o("WAWebBaseModel").prop()),
            (t.contact = o("WAWebBaseModel").session()),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.initialize = function () {
            (e.prototype.initialize.call(this),
              this.addChild(
                "contact",
                o("WAWebContactCollection").ContactCollection.gadd(this.id),
              ));
          }),
          t
        );
      })((e = o("WAWebBaseModel")).BaseModel);
    ((s.Proxy = "msgInfoParticipant"), (s.idClass = r("WAWebWid")));
    var u = e.defineModel(s),
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebCollection"));
    ((c.model = u),
      (c.comparator = function (e, t) {
        return o("WAWebContactComparator").ContactComparator(
          e.contact,
          t.contact,
        );
      }));
    var d = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.usePlayReceipt = o("WAWebBaseModel").prop()),
          (t.playedRemaining = o("WAWebBaseModel").prop(0)),
          (t.readRemaining = o("WAWebBaseModel").prop(0)),
          (t.deliveryRemaining = o("WAWebBaseModel").prop(0)),
          (t.deliveryPrivacyMode = o("WAWebBaseModel").prop()),
          (t.played = o("WAWebBaseModel").collection(c)),
          (t.read = o("WAWebBaseModel").collection(c)),
          (t.delivery = o("WAWebBaseModel").collection(c)),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getCollection = function () {
          return o("WAWebMsgInfoCollection").MsgInfoCollection;
        }),
        (n.delete = function () {
          (e.prototype.delete.call(this),
            o("WAWebMsgInfoGetters").clearMsgInfoGetterCacheFor(this));
        }),
        t
      );
    })(e.BaseModel);
    ((d.Proxy = "msgInfo"), (d.idClass = r("WAWebMsgKey")));
    var m = e.defineModel(d);
    ((l.MsgInfoParticipant = u),
      (l.ParticipantCollection = c),
      (l.MsgInfo = m));
  },
  98,
);
