__d(
  "WAWebMsgInfoCollection",
  [
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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t, n) {
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
    var d = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.findImpl = async function (e) {
            var t = o("WAWebMsgCollection").MsgCollection.get(e);
            if (t) {
              if (!o("WAWebMsgGetters").getIsSentByMe(t))
                return Promise.reject(
                  new (o("WAWebBaseCollection").CollectionSilentQueryError)(
                    "message not sent by me",
                  ),
                );
            } else
              return Promise.reject(
                new (o("WAWebBaseCollection").CollectionSilentQueryError)(
                  "No message found for id: " + e.toString(),
                ),
              );
            var n;
            try {
              n = await o("WAWebApiMessageInfoStore").queryMsgInfo(e);
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
            var r = c(e, n);
            return babelHelpers.extends({}, r, {
              usePlayReceipt:
                t.type === o("WAWebMsgType").MSG_TYPE.PTT || t.isViewOnce,
            });
          }),
          (t.findManyAndUpdate = async function (e) {
            var t = new Map(),
              n = [];
            e.forEach(function (e) {
              var t = o("WAWebMsgCollection").MsgCollection.get(e);
              t && o("WAWebMsgGetters").getIsSentByMe(t) && n.push(t);
            });
            var r;
            try {
              r = await o("WAWebApiMessageInfoStore").queryMsgInfos(e);
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
              n.forEach(function (e) {
                var n = e.id,
                  a = r.get(n.toString());
                if (!a)
                  return Promise.reject(
                    new (o("WAWebBaseCollection").CollectionSilentQueryError)(
                      "query returned no msg info for msg " + n.toString(),
                    ),
                  );
                var i = babelHelpers.extends({}, c(n, a), {
                    usePlayReceipt:
                      e.type === o("WAWebMsgType").MSG_TYPE.PTT || e.isViewOnce,
                  }),
                  l = m.gaddUp(i);
                t.set(n.toString(), l);
              }),
              t
            );
          }),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.updateInfo = function (t, n, a, i, l, s) {
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
    d.model = o("WAWebMsgInfoModel").MsgInfo;
    var m = new d();
    l.MsgInfoCollection = m;
  },
  98,
);
