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
    "WAWebNoop",
    "WAWebThreadMsgUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n() {
          for (var n, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            (n = t.call.apply(t, [this].concat(i)) || this),
            (n.hasLinkBefore = !0),
            (n.$ChatLinkMsgsCollection$p_1 = null),
            (n.$ChatLinkMsgsCollection$p_2 = null),
            (n.count = async function (t, a) {
              var i;
              if (a && !a.equals(n.$ChatLinkMsgsCollection$p_2))
                ((n.$ChatLinkMsgsCollection$p_1 = null),
                  (n.$ChatLinkMsgsCollection$p_2 = a));
              else if (n.$ChatLinkMsgsCollection$p_1 != null)
                return n.$ChatLinkMsgsCollection$p_1;
              var l =
                  a != null
                    ? t.msgs.filter(function (e) {
                        return (
                          o("WAWebMsgLinks").getLinksFromMsg(e).length > 0 &&
                          o("WAWebThreadMsgUtils").isMsgInThread(e, a)
                        );
                      })
                    : t.msgs.filter(function (e) {
                        return o("WAWebMsgLinks").getLinksFromMsg(e).length > 0;
                      }),
                s = (i = l[0]) != null ? i : t.msgs.head();
              if (s == null) return 0;
              try {
                var u,
                  c = await o("WAWebMsgCollection").MsgCollection.queryMedia(
                    s.id.remote,
                    1 / 0,
                    "before",
                    s.id,
                    "url",
                  ),
                  d =
                    a != null
                      ? c.filter(function (e) {
                          return o("WAWebThreadMsgUtils").isMsgInThread(e, a);
                        })
                      : c,
                  m = (u = d.length) != null ? u : 0,
                  p = m > 0 && l.length > 0 ? 1 : 0;
                return (
                  (n.$ChatLinkMsgsCollection$p_1 = m + l.length - p),
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
            (t.prototype.delete.call(this), this.stopListening(), this.reset());
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
              var a = (this.queryLinkBefore = o("WAWebMsgCollection")
                .MsgCollection.queryMedia(
                  n.id.remote,
                  o("WAWebMsgCollection").MEDIA_QUERY_LIMIT,
                  "before",
                  n.id,
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
              return (this.trigger("query_link_before"), a);
            }
            var i = t.msgs.getModelsArray();
            if (this.length === 0) {
              if (!i || i.length === 0)
                return ((this.hasLinkBefore = !1), Promise.resolve());
              (this.add(
                i.filter(function (e) {
                  return o("WAWebMsgLinks").getLinksFromMsg(e).length > 0;
                }),
                { at: 0 },
              ),
                this.createLinksAndAddMsgs(i));
            }
            if (t.msgs.msgLoadState.noEarlierMsgs)
              return ((this.hasLinkBefore = !1), Promise.resolve());
            if (this.length <= 2 * o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) {
              var l = this.length === 0 ? t.msgs.head() : this.head();
              return this.queryLinks(t, l);
            }
            return Promise.resolve();
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
                if (i != null) {
                  var l = o("WAWebMsgLinks").getLinksFromMsg(i);
                  l.length && n.push(i);
                }
              })
              .then(function () {
                (e.add(n), e.trigger("query_link_before"));
              });
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((s.model = o("WAWebMsgModel").Msg),
      (s.comparator = function (e, t) {
        return e.t - t.t;
      }),
      (l.default = s));
  },
  98,
);
