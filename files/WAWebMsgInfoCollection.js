__d(
  "WAWebMsgInfoCollection",
  [
    "Promise",
    "WALogger",
    "WAWebApiMessageInfoStore",
    "WAWebBaseCollection",
    "WAWebHandleMsgTypes.flow",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgInfoAction",
    "WAWebMsgInfoModel",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebStaleBaseCollection",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t, n) {
      var a = n.delivery,
        i = n.deliveryPrivacyMode,
        l = n.deliveryRemaining,
        s = n.played,
        u = n.playedRemaining,
        c = n.read,
        d = n.readRemaining,
        m = {
          id: t,
          read: c.map(function (e) {
            return babelHelpers.extends({}, e);
          }),
          readRemaining: d,
          played: s.map(function (e) {
            return babelHelpers.extends({}, e);
          }),
          playedRemaining: u,
          delivery: a.map(function (e) {
            return babelHelpers.extends({}, e);
          }),
          deliveryRemaining: l,
        };
      if (i != null) {
        var p = o("WAWebHandleMsgTypes.flow").HostStorageEnumType.cast(
            i.hostStorage,
          ),
          _ = o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.cast(
            i.actualActors,
          );
        if (_ == null || p == null)
          throw (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "queryMsgInfo: got unsupported host storage or actual actors",
                  ])),
              )
              .sendLogs("queryMsgInfo-incorrect-enums"),
            r("err")(
              "queryMsgInfo: got unsupported host storage or actual actors",
            )
          );
        var f = {
          hostStorage: p,
          privacyModeTs: i.privacyModeTs,
          actualActors: _,
        };
        m.deliveryPrivacyMode = f;
      }
      return m;
    }
    var m = (function (e) {
      function t() {
        for (var t, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          (t = e.call.apply(e, [this].concat(a)) || this),
          (t.findImpl = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("WAWebMsgCollection").MsgCollection.get(e);
                if (t) {
                  if (!o("WAWebMsgGetters").getIsSentByMe(t))
                    return (c || (c = n("Promise"))).reject(
                      new (o("WAWebBaseCollection").CollectionSilentQueryError)(
                        "message not sent by me",
                      ),
                    );
                } else
                  return (c || (c = n("Promise"))).reject(
                    new (o("WAWebBaseCollection").CollectionSilentQueryError)(
                      "No message found for id: " + e.toString(),
                    ),
                  );
                var r;
                try {
                  r = yield o("WAWebApiMessageInfoStore").queryMsgInfo(e);
                } catch (e) {
                  throw (
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "queryMsgInfo: failed to find msg info in storage",
                          ])),
                      )
                      .verbose()
                      .sendLogs("queryMsgInfo failed"),
                    e
                  );
                }
                var a = d(e, r);
                return babelHelpers.extends({}, a, {
                  usePlayReceipt:
                    t.type === o("WAWebMsgType").MSG_TYPE.PTT || t.isViewOnce,
                });
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          (t.findManyAndUpdate = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = new Map(),
                  r = [];
                e.forEach(function (e) {
                  var t = o("WAWebMsgCollection").MsgCollection.get(e);
                  t && o("WAWebMsgGetters").getIsSentByMe(t) && r.push(t);
                });
                var a;
                try {
                  a = yield o("WAWebApiMessageInfoStore").queryMsgInfos(e);
                } catch (e) {
                  throw (
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "queryMsgInfos: failed to find msg info in storage",
                          ])),
                      )
                      .verbose()
                      .sendLogs("queryMsgInfos failed"),
                    e
                  );
                }
                return (
                  r.forEach(function (e) {
                    var r = e.id,
                      i = a.get(r.toString());
                    if (!i)
                      return (c || (c = n("Promise"))).reject(
                        new (o(
                          "WAWebBaseCollection",
                        ).CollectionSilentQueryError)(
                          "query returned no msg info for msg " + r.toString(),
                        ),
                      );
                    var l = babelHelpers.extends({}, d(r, i), {
                        usePlayReceipt:
                          e.type === o("WAWebMsgType").MSG_TYPE.PTT ||
                          e.isViewOnce,
                      }),
                      s = p.gaddUp(l);
                    t.set(r.toString(), s);
                  }),
                  t
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.updateInfo = function (t, n, a, i, l, s) {
          var e = new (r("WAWebMsgKey"))({
              from: n,
              to: a,
              id: t,
              participant: l,
            }),
            u = new (r("WAWebMsgKey"))({ from: n, to: a, id: t }),
            c = this.get(e) || this.get(u);
          if (c) return o("WAWebMsgInfoAction").updateMsgInfo(c, i, l, s);
        }),
        t
      );
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    m.model = o("WAWebMsgInfoModel").MsgInfo;
    var p = new m();
    l.MsgInfoCollection = p;
  },
  98,
);
