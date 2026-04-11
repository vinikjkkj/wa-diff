__d(
  "WAWebStarredMsgCollection",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAWebBaseCollection",
    "WAWebCollectionConstants",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgModel",
    "WAWebSocketConstants",
    "WAWebSocketModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
        function a() {
          var e;
          return (
            (e = t.call(this) || this),
            (e.syncPromise = null),
            (e.isSynced = !1),
            e.listenTo(
              o("WAWebSocketModel").Socket,
              "change:stream",
              function () {
                o("WAWebSocketModel").Socket.stream ===
                o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED
                  ? (e.isSynced = !1)
                  : o("WAWebSocketModel").Socket.stream ===
                      o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED &&
                    e.delete();
              },
            ),
            e
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.process = function (t, n, r, o) {
            o !== !0 ? this.updateMsgs(t, n, r) : this.delete();
          }),
          (i.sync = function (a) {
            if (this.isSynced) return (u || (u = n("Promise"))).resolve();
            if (this.syncPromise != null) return this.syncPromise;
            var t = this,
              i,
              l = this.last();
            return (
              l && (i = l.id),
              (this.syncPromise = o("WAWebMsgCollection")
                .MsgCollection.getStarred(
                  a,
                  o("WAWebCollectionConstants").PAGE_SIZE,
                  i,
                )
                .then(function (e) {
                  (e.length && t.add(e, { silent: !0 }),
                    e.length < o("WAWebCollectionConstants").PAGE_SIZE &&
                      (t.isSynced = !0));
                })
                .catch(function (t) {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "starred msg sync error: ",
                      ])),
                  );
                })
                .finally(function () {
                  ((t.syncPromise = null), t.trigger("sync"));
                })),
              this.trigger("sync"),
              r("WANullthrows")(this.syncPromise, "syncPromise can not be null")
            );
          }),
          (i.updateMsgs = function (t, r, a) {
            var e = this,
              i = this.syncPromise || (u || (u = n("Promise"))).resolve();
            this.syncPromise = i
              .then(function () {
                if (t) {
                  var i =
                    r.length > 0
                      ? o(
                          "WAWebMsgCollection",
                        ).MsgCollection.incrementalStarredUpdate(r)
                      : (u || (u = n("Promise"))).resolve([]);
                  return i
                    .then(function (t) {
                      var n = t.concat(a);
                      (e.isSynced && e.add(n, { silent: !0 }),
                        n.forEach(function (e) {
                          var t;
                          (t = o("WAWebFrontendMsgGetters").getChat(
                            e,
                          ).starredMsgs) == null || t.add(e);
                        }),
                        e.trigger("sync"));
                    })
                    .catch(function (e) {
                      o("WALogger").WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "models:starred:update:error: ",
                          ])),
                      );
                    });
                }
                var l = r.concat(a).filter(function (e) {
                  return !e.star;
                });
                p(l);
              })
              .finally(function () {
                e.syncPromise = null;
              });
          }),
          (i.delete = function () {
            ((this.isSynced = !1), t.prototype.delete.call(this));
          }),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((c.model = o("WAWebMsgModel").Msg),
      (c.comparator = function (e, t) {
        return t.t - e.t;
      }));
    var d = new c();
    function m(e) {
      (d.add(e),
        e.forEach(function (e) {
          var t;
          (t = o("WAWebFrontendMsgGetters").getChat(e).starredMsgs) == null ||
            t.add(e);
        }));
    }
    function p(e) {
      (d.remove(e),
        e.forEach(function (e) {
          var t;
          (t = o("WAWebFrontendMsgGetters").getChat(e).starredMsgs) == null ||
            t.remove(e);
        }));
    }
    ((l.StarredMsgCollection = c),
      (l.AllStarredMsgsCollection = d),
      (l.addStarredMsgs = m),
      (l.removeStarredMsgs = p));
  },
  98,
);
