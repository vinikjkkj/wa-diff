__d(
  "WAWebChatMediaMsgsCollection",
  [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBaseCollection",
    "WAWebCarouselMsgUtils",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgModel",
    "WAWebNoop",
    "WAWebThreadMsgUtils",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = { before: "before", after: "after" };
    function c(e) {
      return (
        o("WAWebMsgGetters").getIsMedia(e) &&
        !e.isViewOnce &&
        o("WAWebMessageAssociationUIUtils").shouldDisplayOrphanMessage(e) &&
        e.viewMode !== o("WAWebViewMode.flow").ViewModeType.HIDDEN
      );
    }
    var d = (function (t) {
      function a() {
        for (var a, i = arguments.length, l = new Array(i), s = 0; s < i; s++)
          l[s] = arguments[s];
        return (
          (a = t.call.apply(t, [this].concat(l)) || this),
          (a.hasMediaBefore = !0),
          (a.hasMediaAfter = !0),
          (a.$ChatMediaMsgsCollection$p_1 = null),
          (a.$ChatMediaMsgsCollection$p_2 = null),
          (a.count = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                var i;
                if (n && !n.equals(a.$ChatMediaMsgsCollection$p_2))
                  ((a.$ChatMediaMsgsCollection$p_1 = null),
                    (a.$ChatMediaMsgsCollection$p_2 = n));
                else if (a.$ChatMediaMsgsCollection$p_1 != null)
                  return a.$ChatMediaMsgsCollection$p_1;
                var l = n
                    ? t.msgs.filter(function (e) {
                        return (
                          c(e) && o("WAWebThreadMsgUtils").isMsgInThread(e, n)
                        );
                      })
                    : t.msgs.filter(c),
                  s = (i = l[0]) != null ? i : t.msgs.head();
                if (s == null) return 0;
                try {
                  var u,
                    d = yield o("WAWebMsgCollection").MsgCollection.queryMedia(
                      s.id.remote,
                      1 / 0,
                      "before",
                      s.id,
                    ),
                    m = n
                      ? r("countWhere")(d.messages, function (e) {
                          return o("WAWebThreadMsgUtils").isMsgInThread(e, n);
                        })
                      : (u = d.mediaCount) != null
                        ? u
                        : 0,
                    p = m > 0 && l.length > 0 ? 1 : 0;
                  return (
                    (a.$ChatMediaMsgsCollection$p_1 = m + l.length - p),
                    a.$ChatMediaMsgsCollection$p_1
                  );
                } catch (n) {
                  return (
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to count medias for chat ",
                            " with error ",
                            "",
                          ])),
                        t.id,
                        n,
                      )
                      .verbose()
                      .sendLogs("md-failed-medias-count"),
                    null
                  );
                }
              },
            );
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })()),
          babelHelpers.assertThisInitialized(a) ||
            babelHelpers.assertThisInitialized(a)
        );
      }
      babelHelpers.inheritsLoose(a, t);
      var i = a.prototype;
      return (
        (i.delete = function () {
          (t.prototype.delete.call(this), this.stopListening());
        }),
        (i.add = function (n, r) {
          return (
            (this.$ChatMediaMsgsCollection$p_1 = null),
            t.prototype.add.call(this, n, r)
          );
        }),
        (i.remove = function (n, r) {
          return (
            (this.$ChatMediaMsgsCollection$p_1 = null),
            t.prototype.remove.call(this, n, r)
          );
        }),
        (i.getAfter = function (t) {
          var e = this.indexOf(t);
          return e < 0 || e === this.length - 1 ? null : this.at(e + 1);
        }),
        (i.getBefore = function (t) {
          var e = this.indexOf(t);
          return e <= 0 ? null : this.at(e - 1);
        }),
        (i.loadEarlierMedias = function () {
          var e = this.head();
          if (e) {
            if (e.isCarouselCard) {
              var t;
              e =
                (t = o("WAWebCarouselMsgUtils").getParentMsgFromCarouselCard(
                  e,
                )) != null
                  ? t
                  : e;
            }
            this.queryMedia({ msg: e });
          }
        }),
        (i.loadRecentMedias = function () {
          var e = this.last();
          if (e) {
            if (e.isCarouselCard) {
              var t;
              e =
                (t = o("WAWebCarouselMsgUtils").getParentMsgFromCarouselCard(
                  e,
                )) != null
                  ? t
                  : e;
            }
            this.queryMedia({ msg: e, direction: u.after });
          }
        }),
        (i.loadMoreAroundIfNeeded = function (t) {
          if (!(!t || t.isViewOnce)) {
            var e = this.indexOf(t);
            (e < 20 && this.hasMediaBefore && this.loadEarlierMedias(),
              this.length - e < 20 &&
                this.hasMediaAfter &&
                this.loadRecentMedias());
          }
        }),
        (i.queryMedia = function (t) {
          var e,
            a = this,
            i = t.chat,
            l = t.msg,
            d = (e = t.direction) != null ? e : u.before;
          if (!l && i) {
            var p = i.msgs;
            if (!p || p.length === 0)
              return (
                (this.hasMediaBefore = !1),
                new (s || (s = n("Promise")))(function (e) {
                  e({ eof: !0 });
                })
              );
            this.add(p.filter(c), { at: 0 });
            var _ = this.toArray();
            if (i.msgs.msgLoadState.noEarlierMsgs)
              return (
                (this.hasMediaBefore = !1),
                new (s || (s = n("Promise")))(function (e) {
                  e({ eof: !0 });
                })
              );
            if (_.length <= 2 * o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) {
              var f = _.length === 0 ? p.head() : _[0];
              return this.queryMedia({ chat: i, msg: f });
            }
            return new (s || (s = n("Promise")))(function (e) {
              e({ eof: !1 });
            });
          }
          if (l && d === u.before) {
            if (this.queryMediaBefore) return this.queryMediaBefore;
            var g = 0;
            return (
              (this.queryMediaBefore = o("WAWebMsgCollection")
                .MsgCollection.queryMedia(
                  l.id.remote,
                  o("WAWebMsgCollection").MEDIA_QUERY_LIMIT,
                  d,
                  o("WAWebMsgGetters").getIsMedia(l) ? l.id : void 0,
                )
                .then(function (e) {
                  var t = e.messages;
                  (!t ||
                    t.length < o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) &&
                    (a.hasMediaBefore = !1);
                  var n = [];
                  return (
                    t && t.length > 0 && (n = m(t)),
                    a.add(n, { at: 0 }),
                    (g = n.length),
                    { length: g }
                  );
                })
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebBackendErrors").E404,
                    r("WAWebNoop"),
                  ),
                )
                .finally(function () {
                  ((a.queryMediaBefore = null),
                    a.trigger("query_media_before", g));
                })),
              this.trigger("query_media_before", 0),
              this.queryMediaBefore
            );
          } else if (l && d === u.after)
            return this.queryMediaAfter
              ? this.queryMediaAfter
              : (this.queryMediaAfter = o("WAWebMsgCollection")
                  .MsgCollection.queryMedia(
                    l.id.remote,
                    o("WAWebMsgCollection").MEDIA_QUERY_LIMIT,
                    d,
                    l.id,
                  )
                  .then(function (e) {
                    var t = e.messages;
                    (!t ||
                      t.length < o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) &&
                      (a.hasMediaAfter = !1);
                    var n = [];
                    return (
                      t && t.length > 0 && (n = m(t)),
                      a.add(n),
                      { length: n.length }
                    );
                  })
                  .catch(
                    o("WAFilteredCatch").filteredCatch(
                      o("WAWebBackendErrors").E404,
                      r("WAWebNoop"),
                    ),
                  )
                  .finally(function () {
                    ((a.queryMediaAfter = null),
                      a.trigger("query_media_after"));
                  }));
        }),
        a
      );
    })(o("WAWebBaseCollection").BaseCollection);
    ((d.model = o("WAWebMsgModel").Msg),
      (d.comparator = function (e, t) {
        return e.t - t.t;
      }));
    function m(e) {
      return o("WAWebCarouselMsgUtils").flattenMsgs(e).filter(c);
    }
    l.default = d;
  },
  98,
);
