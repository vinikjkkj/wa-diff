__d(
  "WAWebEventMsgsCollection",
  [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBaseCollection",
    "WAWebCollectionConstants",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgModel",
    "WAWebNoop",
    "WAWebSocketConstants",
    "WAWebSocketModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function a(e) {
          var n;
          return (
            (n = t.call(this) || this),
            (n.syncPromise = null),
            (n.isFullySynced = !1),
            (n.isInitialized = !1),
            (n.chat = e),
            n.listenTo(
              o("WAWebSocketModel").Socket,
              "change:stream",
              function () {
                o("WAWebSocketModel").Socket.stream ===
                o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED
                  ? (n.isFullySynced = !1)
                  : o("WAWebSocketModel").Socket.stream ===
                      o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED &&
                    n.delete();
              },
            ),
            n
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.initialize = function () {
            if (this.isInitialized) return (s || (s = n("Promise"))).resolve();
            var e = this.chat.msgs;
            if (e == null) return (s || (s = n("Promise"))).resolve();
            e.length && this.add(e.filter(c));
            var t = (s || (s = n("Promise"))).resolve();
            return (
              this.chat.msgs.msgLoadState.noEarlierMsgs
                ? (this.isFullySynced = !0)
                : (t = this.queryEvents({ recurse: !1 })),
              (this.isInitialized = !0),
              t
            );
          }),
          (i.delete = function () {
            ((this.isFullySynced = !1),
              (this.isInitialized = !1),
              t.prototype.delete.call(this));
          }),
          (i.queryEvents = function (a) {
            var t = this,
              i = a.recurse;
            if (this.syncPromise) return this.syncPromise;
            if (this.isFullySynced) return (s || (s = n("Promise"))).resolve();
            var l,
              u = this.last();
            u && (l = u.id);
            var d = (this.syncPromise = o("WAWebMsgCollection")
              .MsgCollection.getEventMsgs(
                this.chat.id,
                o("WAWebCollectionConstants").PAGE_SIZE,
                l,
              )
              .then(function (e) {
                ((!e || e.length < o("WAWebCollectionConstants").PAGE_SIZE) &&
                  (t.isFullySynced = !0),
                  t.add(e.filter(c)));
              })
              .then(function () {
                if (((t.syncPromise = null), t.isFullySynced))
                  t.trigger(
                    o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED,
                  );
                else if (i === !0)
                  return (
                    t.trigger("partial_sync"),
                    t.queryEvents({ recurse: !0 })
                  );
              })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").E404,
                  r("WAWebNoop"),
                ),
              )
              .catch(function (t) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Event msg sync error: ",
                    ])),
                );
              })).finally(function () {
              t.syncPromise = null;
            });
            return d;
          }),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((u.model = o("WAWebMsgModel").Msg),
      (u.comparator = function (e, t) {
        return t.t - e.t;
      }));
    function c(e) {
      return o("WAWebFrontendMsgGetters").getAsEventCreation(e) != null;
    }
    l.EventMsgsCollection = u;
  },
  98,
);
