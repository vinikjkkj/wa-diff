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
    "WAWebNoop",
    "WAWebThreadMsgUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function a() {
          for (var a, i = arguments.length, l = new Array(i), s = 0; s < i; s++)
            l[s] = arguments[s];
          return (
            (a = t.call.apply(t, [this].concat(l)) || this),
            (a.hasLinkBefore = !0),
            (a.$ChatLinkMsgsCollection$p_1 = null),
            (a.$ChatLinkMsgsCollection$p_2 = null),
            (a.count = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t, n) {
                  var i;
                  if (n && !n.equals(a.$ChatLinkMsgsCollection$p_2))
                    ((a.$ChatLinkMsgsCollection$p_1 = null),
                      (a.$ChatLinkMsgsCollection$p_2 = n));
                  else if (a.$ChatLinkMsgsCollection$p_1 != null)
                    return a.$ChatLinkMsgsCollection$p_1;
                  var l =
                      n != null
                        ? t.msgs.filter(function (e) {
                            return (
                              o("WAWebMsgLinks").getLinksFromMsg(e).length >
                                0 &&
                              o("WAWebThreadMsgUtils").isMsgInThread(e, n)
                            );
                          })
                        : t.msgs.filter(function (e) {
                            return (
                              o("WAWebMsgLinks").getLinksFromMsg(e).length > 0
                            );
                          }),
                    s = (i = l[0]) != null ? i : t.msgs.head();
                  if (s == null) return 0;
                  try {
                    var u,
                      c = yield o(
                        "WAWebMsgCollection",
                      ).MsgCollection.queryMedia(
                        s.id.remote,
                        1 / 0,
                        "before",
                        s.id,
                        "url",
                      ),
                      d =
                        n != null
                          ? c.filter(function (e) {
                              return o("WAWebThreadMsgUtils").isMsgInThread(
                                e,
                                n,
                              );
                            })
                          : c,
                      m = (u = d.length) != null ? u : 0,
                      p = m > 0 && l.length > 0 ? 1 : 0;
                    return (
                      (a.$ChatLinkMsgsCollection$p_1 = m + l.length - p),
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
              var i = (this.queryLinkBefore = o("WAWebMsgCollection")
                .MsgCollection.queryMedia(
                  a.id.remote,
                  o("WAWebMsgCollection").MEDIA_QUERY_LIMIT,
                  "before",
                  a.id,
                  "url",
                )
                .then(function (t) {
                  ((!t ||
                    t.length < o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) &&
                    (e.hasLinkBefore = !1),
                    e.add(t, { at: 0 }),
                    e.createLinksAndAddMsgs(t));
                })
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebBackendErrors").E404,
                    r("WAWebNoop"),
                  ),
                )
                .finally(function () {
                  ((e.queryLinkBefore = null), e.trigger("query_link_before"));
                }));
              return (this.trigger("query_link_before"), i);
            }
            var l = t.msgs.getModelsArray();
            if (this.length === 0) {
              if (!l || l.length === 0)
                return (
                  (this.hasLinkBefore = !1),
                  (s || (s = n("Promise"))).resolve()
                );
              (this.add(
                l.filter(function (e) {
                  return o("WAWebMsgLinks").getLinksFromMsg(e).length > 0;
                }),
                { at: 0 },
              ),
                this.createLinksAndAddMsgs(l));
            }
            if (t.msgs.msgLoadState.noEarlierMsgs)
              return (
                (this.hasLinkBefore = !1),
                (s || (s = n("Promise"))).resolve()
              );
            if (this.length <= 2 * o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) {
              var u = this.length === 0 ? t.msgs.head() : this.head();
              return this.queryLinks(t, u);
            }
            return (s || (s = n("Promise"))).resolve();
          }),
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
                if (i != null) {
                  var l = o("WAWebMsgLinks").getLinksFromMsg(i);
                  l.length && n.push(i);
                }
              })
              .then(function () {
                (e.add(n), e.trigger("query_link_before"));
              });
          }),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((u.model = o("WAWebMsgModel").Msg),
      (u.comparator = function (e, t) {
        return e.t - t.t;
      }),
      (l.default = u));
  },
  98,
);
