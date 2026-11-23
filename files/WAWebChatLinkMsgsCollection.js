__d(
  "WAWebChatLinkMsgsCollection",
  [
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseLoop",
    "WAWebBackendErrors",
    "WAWebBaseCollection",
    "WAWebMsgCollection",
    "WAWebMsgLinks",
    "WAWebMsgModel",
    "WAWebMsgQueryUtils",
    "WAWebNoop",
    "WAWebThreadMsgUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
        function n() {
          for (var n, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            (n = t.call.apply(t, [this].concat(i)) || this),
            (n.hasLinkBefore = !0),
            (n.$ChatLinkMsgsCollection$p_1 = null),
            (n.$ChatLinkMsgsCollection$p_2 = 0),
            (n.$ChatLinkMsgsCollection$p_3 = !1),
            (n.$ChatLinkMsgsCollection$p_4 = null),
            (n.$ChatLinkMsgsCollection$p_5 = null),
            (n.$ChatLinkMsgsCollection$p_6 = 0),
            (n.count = async function (t, a) {
              var i;
              if (
                (n.$ChatLinkMsgsCollection$p_3 ||
                  ((n.$ChatLinkMsgsCollection$p_3 = !0),
                  n.refreshCountAfterBackfill(t)),
                a && !a.equals(n.$ChatLinkMsgsCollection$p_4))
              )
                ((n.$ChatLinkMsgsCollection$p_1 = null),
                  (n.$ChatLinkMsgsCollection$p_4 = a));
              else if (n.$ChatLinkMsgsCollection$p_1 != null)
                return n.$ChatLinkMsgsCollection$p_1;
              var l =
                  a != null
                    ? t.msgs.filter(function (e) {
                        return (
                          o("WAWebMsgLinks").hasLinkGalleryLinks(e) &&
                          o("WAWebThreadMsgUtils").isMsgInThread(e, a)
                        );
                      })
                    : t.msgs.filter(function (e) {
                        return o("WAWebMsgLinks").hasLinkGalleryLinks(e);
                      }),
                s = (i = l[0]) != null ? i : t.msgs.head();
              if (s == null) return 0;
              var u = n.$ChatLinkMsgsCollection$p_2;
              try {
                var c = await o("WAWebMsgQueryUtils").queryMedia(
                    s.id.remote,
                    1 / 0,
                    "before",
                    s.id,
                    "url",
                  ),
                  d = c.filter(o("WAWebMsgLinks").shouldListLinkIndexMsg),
                  m =
                    a != null
                      ? d.filter(function (e) {
                          return o("WAWebThreadMsgUtils").isMsgInThread(e, a);
                        })
                      : d;
                if (u !== n.$ChatLinkMsgsCollection$p_2) return n.count(t, a);
                var p =
                  l.length > 0 &&
                  m.some(function (e) {
                    return e.id.equals(s.id);
                  })
                    ? 1
                    : 0;
                return (
                  (n.$ChatLinkMsgsCollection$p_1 = m.length + l.length - p),
                  n.$ChatLinkMsgsCollection$p_1
                );
              } catch (n) {
                return (
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to count medias for chat ",
                          "",
                        ])),
                      t.id,
                    )
                    .verbose()
                    .sendLogs(
                      "md-failed-medias-count: " + r("getErrorSafe")(n).message,
                    ),
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
            (t.prototype.delete.call(this),
              this.stopListening(),
              this.reset(),
              (this.hasLinkBefore = !0),
              (this.queryLinkBefore = null),
              (this.$ChatLinkMsgsCollection$p_5 = null),
              this.$ChatLinkMsgsCollection$p_6++,
              (this.$ChatLinkMsgsCollection$p_1 = null),
              this.$ChatLinkMsgsCollection$p_2++);
          }),
          (a.add = function (n, r) {
            return (
              (this.$ChatLinkMsgsCollection$p_1 = null),
              t.prototype.add.call(this, n, r)
            );
          }),
          (a.remove = function (n, r) {
            return (
              (this.$ChatLinkMsgsCollection$p_1 = null),
              t.prototype.remove.call(this, n, r)
            );
          }),
          (a.queryLinks = function (t, n) {
            var e = this;
            if (n) {
              if (this.queryLinkBefore) return this.queryLinkBefore;
              var a =
                  this.$ChatLinkMsgsCollection$p_5 != null &&
                  this.$ChatLinkMsgsCollection$p_5.t < n.t
                    ? this.$ChatLinkMsgsCollection$p_5
                    : n,
                i = this.$ChatLinkMsgsCollection$p_6,
                l = (this.queryLinkBefore = o("WAWebMsgQueryUtils")
                  .queryMedia(
                    a.id.remote,
                    o("WAWebMsgCollection").MEDIA_QUERY_LIMIT,
                    "before",
                    a.id,
                    "url",
                  )
                  .then(function (t) {
                    i === e.$ChatLinkMsgsCollection$p_6 &&
                      ((!t ||
                        t.length < o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) &&
                        (e.hasLinkBefore = !1),
                      t != null &&
                        t.length > 0 &&
                        (e.$ChatLinkMsgsCollection$p_5 = t.reduce(
                          function (e, t) {
                            return e.t <= t.t ? e : t;
                          },
                        )),
                      e.add(
                        t.filter(o("WAWebMsgLinks").shouldListLinkIndexMsg),
                        { at: 0 },
                      ),
                      e.createLinksAndAddMsgs(t));
                  })
                  .catch(
                    o("WAFilteredCatch").filteredCatch(
                      o("WAWebBackendErrors").E404,
                      r("WAWebNoop"),
                    ),
                  )
                  .finally(function () {
                    (e.queryLinkBefore === l && (e.queryLinkBefore = null),
                      e.trigger("query_link_before"));
                  }));
              return (this.trigger("query_link_before"), l);
            }
            var s = t.msgs.getModelsArray();
            if (this.length === 0) {
              if (!s || s.length === 0)
                return ((this.hasLinkBefore = !1), Promise.resolve());
              (this.add(
                s.filter(function (e) {
                  return o("WAWebMsgLinks").hasLinkGalleryLinks(e);
                }),
                { at: 0 },
              ),
                this.createLinksAndAddMsgs(s),
                this.addBackfilledLinks(t));
            }
            if (t.msgs.msgLoadState.noEarlierMsgs)
              return ((this.hasLinkBefore = !1), Promise.resolve());
            if (this.length <= 2 * o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) {
              var u = this.length === 0 ? t.msgs.head() : this.head();
              return this.queryLinks(t, u);
            }
            return Promise.resolve();
          }),
          (a.addBackfilledLinks = async function (t) {
            var e = this;
            try {
              var n = await o(
                "WAWebMsgQueryUtils",
              ).backfillGroupAgentRichResponseLinks(t.id);
              await this.queryLinkBefore;
              var a = n.filter(function (n) {
                return (
                  o("WAWebMsgLinks").hasLinkGalleryLinks(n) &&
                  !e.$ChatLinkMsgsCollection$p_7(t, n)
                );
              });
              a.length > 0 && (this.add(a), this.trigger("query_link_before"));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to backfill links for chat ",
                      "",
                    ])),
                  t.id,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("link-index-backfill-failed");
            }
          }),
          (a.$ChatLinkMsgsCollection$p_7 = function (t, n) {
            var e,
              r = (e = this.head()) != null ? e : t.msgs.head();
            return this.hasLinkBefore && r != null && n.t < r.t;
          }),
          (a.refreshCountAfterBackfill = async function (t) {
            try {
              var e = await o(
                "WAWebMsgQueryUtils",
              ).backfillGroupAgentRichResponseLinks(t.id);
              e.some(function (e) {
                return o("WAWebMsgLinks").hasLinkGalleryLinks(e);
              }) &&
                ((this.$ChatLinkMsgsCollection$p_1 = null),
                this.$ChatLinkMsgsCollection$p_2++,
                this.trigger("link_index_backfill"));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to backfill links for count in chat ",
                      "",
                    ])),
                  t.id,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("link-index-backfill-count-failed");
            }
          }),
          (a.createLinksAndAddMsgs = function (t) {
            var e = this,
              n = [];
            o("WAPromiseLoop")
              .promiseLoop(function (e, r, a) {
                if (t.length === a) {
                  e();
                  return;
                }
                var i = t[a];
                i != null &&
                  o("WAWebMsgLinks").hasLinkGalleryLinks(i) &&
                  n.push(i);
              })
              .then(function () {
                (e.add(n), e.trigger("query_link_before"));
              });
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((c.model = o("WAWebMsgModel").Msg),
      (c.comparator = function (e, t) {
        return e.t - t.t;
      }),
      (l.default = c));
  },
  98,
);
