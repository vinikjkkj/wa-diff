__d(
  "WAWebChatMediaMsgsCollection",
  [
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
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { before: "before", after: "after" };
    function u(e) {
      return (
        o("WAWebMsgGetters").getIsMedia(e) &&
        !e.isViewOnce &&
        o("WAWebMessageAssociationUIUtils").shouldDisplayOrphanMessage(e) &&
        e.viewMode !== o("WAWebViewMode.flow").ViewModeType.HIDDEN
      );
    }
    var c = (function (t) {
      function n() {
        for (var n, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
          i[l] = arguments[l];
        return (
          (n = t.call.apply(t, [this].concat(i)) || this),
          (n.hasMediaBefore = !0),
          (n.hasMediaAfter = !0),
          (n.$ChatMediaMsgsCollection$p_1 = null),
          (n.$ChatMediaMsgsCollection$p_2 = null),
          (n.count = async function (t, a) {
            var i;
            if (a && !a.equals(n.$ChatMediaMsgsCollection$p_2))
              ((n.$ChatMediaMsgsCollection$p_1 = null),
                (n.$ChatMediaMsgsCollection$p_2 = a));
            else if (n.$ChatMediaMsgsCollection$p_1 != null)
              return n.$ChatMediaMsgsCollection$p_1;
            var l = a
                ? t.msgs.filter(function (e) {
                    return u(e) && o("WAWebThreadMsgUtils").isMsgInThread(e, a);
                  })
                : t.msgs.filter(u),
              s = (i = l[0]) != null ? i : t.msgs.head();
            if (s == null) return 0;
            try {
              var c,
                d = await o("WAWebMsgCollection").MsgCollection.queryMedia(
                  s.id.remote,
                  1 / 0,
                  "before",
                  s.id,
                ),
                m = a
                  ? r("countWhere")(d.messages, function (e) {
                      return o("WAWebThreadMsgUtils").isMsgInThread(e, a);
                    })
                  : (c = d.mediaCount) != null
                    ? c
                    : 0,
                p = m > 0 && l.length > 0 ? 1 : 0;
              return (
                (n.$ChatMediaMsgsCollection$p_1 = m + l.length - p),
                n.$ChatMediaMsgsCollection$p_1
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
          }),
          babelHelpers.assertThisInitialized(n) ||
            babelHelpers.assertThisInitialized(n)
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.delete = function () {
          (t.prototype.delete.call(this), this.stopListening());
        }),
        (a.add = function (n, r) {
          return (
            (this.$ChatMediaMsgsCollection$p_1 = null),
            t.prototype.add.call(this, n, r)
          );
        }),
        (a.remove = function (n, r) {
          return (
            (this.$ChatMediaMsgsCollection$p_1 = null),
            t.prototype.remove.call(this, n, r)
          );
        }),
        (a.getAfter = function (t) {
          var e = this.indexOf(t);
          return e < 0 || e === this.length - 1 ? null : this.at(e + 1);
        }),
        (a.getBefore = function (t) {
          var e = this.indexOf(t);
          return e <= 0 ? null : this.at(e - 1);
        }),
        (a.loadEarlierMedias = function () {
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
        (a.loadRecentMedias = function () {
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
            this.queryMedia({ msg: e, direction: s.after });
          }
        }),
        (a.loadMoreAroundIfNeeded = function (t) {
          if (!(!t || t.isViewOnce)) {
            var e = this.indexOf(t);
            (e < 20 && this.hasMediaBefore && this.loadEarlierMedias(),
              this.length - e < 20 &&
                this.hasMediaAfter &&
                this.loadRecentMedias());
          }
        }),
        (a.queryMedia = function (t) {
          var e,
            n = this,
            a = t.chat,
            i = t.msg,
            l = (e = t.direction) != null ? e : s.before;
          if (!i && a) {
            var c = a.msgs;
            if (!c || c.length === 0)
              return (
                (this.hasMediaBefore = !1),
                new Promise(function (e) {
                  e({ eof: !0 });
                })
              );
            this.add(c.filter(u), { at: 0 });
            var m = this.toArray();
            if (a.msgs.msgLoadState.noEarlierMsgs)
              return (
                (this.hasMediaBefore = !1),
                new Promise(function (e) {
                  e({ eof: !0 });
                })
              );
            if (m.length <= 2 * o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) {
              var p = m.length === 0 ? c.head() : m[0];
              return this.queryMedia({ chat: a, msg: p });
            }
            return new Promise(function (e) {
              e({ eof: !1 });
            });
          }
          if (i && l === s.before) {
            if (this.queryMediaBefore) return this.queryMediaBefore;
            var _ = 0;
            return (
              (this.queryMediaBefore = o("WAWebMsgCollection")
                .MsgCollection.queryMedia(
                  i.id.remote,
                  o("WAWebMsgCollection").MEDIA_QUERY_LIMIT,
                  l,
                  o("WAWebMsgGetters").getIsMedia(i) ? i.id : void 0,
                )
                .then(function (e) {
                  var t = e.messages;
                  (!t ||
                    t.length < o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) &&
                    (n.hasMediaBefore = !1);
                  var r = [];
                  return (
                    t && t.length > 0 && (r = d(t)),
                    n.add(r, { at: 0 }),
                    (_ = r.length),
                    { length: _ }
                  );
                })
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebBackendErrors").E404,
                    r("WAWebNoop"),
                  ),
                )
                .finally(function () {
                  ((n.queryMediaBefore = null),
                    n.trigger("query_media_before", _));
                })),
              this.trigger("query_media_before", 0),
              this.queryMediaBefore
            );
          } else if (i && l === s.after)
            return this.queryMediaAfter
              ? this.queryMediaAfter
              : (this.queryMediaAfter = o("WAWebMsgCollection")
                  .MsgCollection.queryMedia(
                    i.id.remote,
                    o("WAWebMsgCollection").MEDIA_QUERY_LIMIT,
                    l,
                    i.id,
                  )
                  .then(function (e) {
                    var t = e.messages;
                    (!t ||
                      t.length < o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) &&
                      (n.hasMediaAfter = !1);
                    var r = [];
                    return (
                      t && t.length > 0 && (r = d(t)),
                      n.add(r),
                      { length: r.length }
                    );
                  })
                  .catch(
                    o("WAFilteredCatch").filteredCatch(
                      o("WAWebBackendErrors").E404,
                      r("WAWebNoop"),
                    ),
                  )
                  .finally(function () {
                    ((n.queryMediaAfter = null),
                      n.trigger("query_media_after"));
                  }));
        }),
        n
      );
    })(o("WAWebBaseCollection").BaseCollection);
    ((c.model = o("WAWebMsgModel").Msg),
      (c.comparator = function (e, t) {
        return e.t - t.t;
      }));
    function d(e) {
      return o("WAWebCarouselMsgUtils").flattenMsgs(e).filter(u);
    }
    l.default = c;
  },
  98,
);
