__d(
  "WAWebChatLinkMsgsCollection",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function a() {
          for (var a, i = arguments.length, l = new Array(i), s = 0; s < i; s++)
            l[s] = arguments[s];
          return (
            (a = t.call.apply(t, [this].concat(l)) || this),
            (a.hasLinkBefore = !0),
            (a.$ChatLinkMsgsCollection$p_1 = null),
            (a.$ChatLinkMsgsCollection$p_2 = !1),
            (a.$ChatLinkMsgsCollection$p_3 = null),
            (a.$ChatLinkMsgsCollection$p_4 = null),
            (a.count = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t, n) {
                  var i;
                  if (
                    (a.$ChatLinkMsgsCollection$p_2 ||
                      ((a.$ChatLinkMsgsCollection$p_2 = !0),
                      a.refreshCountAfterBackfill(t)),
                    n && !n.equals(a.$ChatLinkMsgsCollection$p_3))
                  )
                    ((a.$ChatLinkMsgsCollection$p_1 = null),
                      (a.$ChatLinkMsgsCollection$p_3 = n));
                  else if (a.$ChatLinkMsgsCollection$p_1 != null)
                    return a.$ChatLinkMsgsCollection$p_1;
                  var l =
                      n != null
                        ? t.msgs.filter(function (e) {
                            return (
                              o("WAWebMsgLinks").hasLinkGalleryLinks(e) &&
                              o("WAWebThreadMsgUtils").isMsgInThread(e, n)
                            );
                          })
                        : t.msgs.filter(function (e) {
                            return o("WAWebMsgLinks").hasLinkGalleryLinks(e);
                          }),
                    s = (i = l[0]) != null ? i : t.msgs.head();
                  if (s == null) return 0;
                  try {
                    var u,
                      c = yield o("WAWebMsgQueryUtils").queryMedia(
                        s.id.remote,
                        1 / 0,
                        "before",
                        s.id,
                        "url",
                      ),
                      d = c.filter(o("WAWebMsgLinks").shouldListLinkIndexMsg),
                      m =
                        n != null
                          ? d.filter(function (e) {
                              return o("WAWebThreadMsgUtils").isMsgInThread(
                                e,
                                n,
                              );
                            })
                          : d,
                      p = (u = m.length) != null ? u : 0,
                      _ =
                        l.length > 0 &&
                        m.some(function (e) {
                          return e.id.equals(s.id);
                        })
                          ? 1
                          : 0;
                    return (
                      (a.$ChatLinkMsgsCollection$p_1 = p + l.length - _),
                      a.$ChatLinkMsgsCollection$p_1
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
                          "md-failed-medias-count: " +
                            r("getErrorSafe")(n).message,
                        ),
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
            (t.prototype.delete.call(this), this.stopListening(), this.reset());
          }),
          (i.add = function (n, r) {
            return (
              (this.$ChatLinkMsgsCollection$p_1 = null),
              t.prototype.add.call(this, n, r)
            );
          }),
          (i.remove = function (n, r) {
            return (
              (this.$ChatLinkMsgsCollection$p_1 = null),
              t.prototype.remove.call(this, n, r)
            );
          }),
          (i.queryLinks = function (t, a) {
            var e = this;
            if (a) {
              if (this.queryLinkBefore) return this.queryLinkBefore;
              var i =
                  this.$ChatLinkMsgsCollection$p_4 != null &&
                  this.$ChatLinkMsgsCollection$p_4.t < a.t
                    ? this.$ChatLinkMsgsCollection$p_4
                    : a,
                l = (this.queryLinkBefore = o("WAWebMsgQueryUtils")
                  .queryMedia(
                    i.id.remote,
                    o("WAWebMsgCollection").MEDIA_QUERY_LIMIT,
                    "before",
                    i.id,
                    "url",
                  )
                  .then(function (t) {
                    ((!t ||
                      t.length < o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) &&
                      (e.hasLinkBefore = !1),
                      t != null &&
                        t.length > 0 &&
                        (e.$ChatLinkMsgsCollection$p_4 = t.reduce(
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
                    ((e.queryLinkBefore = null),
                      e.trigger("query_link_before"));
                  }));
              return (this.trigger("query_link_before"), l);
            }
            var s = t.msgs.getModelsArray();
            if (this.length === 0) {
              if (!s || s.length === 0)
                return (
                  (this.hasLinkBefore = !1),
                  (c || (c = n("Promise"))).resolve()
                );
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
              return (
                (this.hasLinkBefore = !1),
                (c || (c = n("Promise"))).resolve()
              );
            if (this.length <= 2 * o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) {
              var u = this.length === 0 ? t.msgs.head() : this.head();
              return this.queryLinks(t, u);
            }
            return (c || (c = n("Promise"))).resolve();
          }),
          (i.addBackfilledLinks = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                try {
                  var n = yield o(
                    "WAWebMsgQueryUtils",
                  ).backfillGroupAgentRichResponseLinks(e.id);
                  yield this.queryLinkBefore;
                  var a = n.filter(function (n) {
                    return (
                      o("WAWebMsgLinks").hasLinkGalleryLinks(n) &&
                      !t.$ChatLinkMsgsCollection$p_5(e, n)
                    );
                  });
                  a.length > 0 &&
                    (this.add(a), this.trigger("query_link_before"));
                } catch (t) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to backfill links for chat ",
                          "",
                        ])),
                      e.id,
                    )
                    .sendLogs(
                      "link-index-backfill-failed: " +
                        r("getErrorSafe")(t).message,
                    );
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$ChatLinkMsgsCollection$p_5 = function (t, n) {
            var e,
              r = (e = this.head()) != null ? e : t.msgs.head();
            return this.hasLinkBefore && r != null && n.t < r.t;
          }),
          (i.refreshCountAfterBackfill = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                try {
                  var t = yield o(
                    "WAWebMsgQueryUtils",
                  ).backfillGroupAgentRichResponseLinks(e.id);
                  t.some(function (e) {
                    return o("WAWebMsgLinks").hasLinkGalleryLinks(e);
                  }) &&
                    ((this.$ChatLinkMsgsCollection$p_1 = null),
                    this.trigger("link_index_backfill"));
                } catch (t) {
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to backfill links for count in chat ",
                          "",
                        ])),
                      e.id,
                    )
                    .sendLogs(
                      "link-index-backfill-failed: " +
                        r("getErrorSafe")(t).message,
                    );
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.createLinksAndAddMsgs = function (t) {
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
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((d.model = o("WAWebMsgModel").Msg),
      (d.comparator = function (e, t) {
        return e.t - t.t;
      }),
      (l.default = d));
  },
  98,
);
