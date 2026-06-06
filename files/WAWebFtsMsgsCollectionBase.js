__d(
  "WAWebFtsMsgsCollectionBase",
  [
    "WAAbortError",
    "WAPromiseRaceAbort",
    "WAWebBaseCollection",
    "WAWebChatCollection",
    "WAWebChatMessageSearch",
    "WAWebFrontendMsgGetters",
    "WAWebMsgModel",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.hasMoreMsgs = !0),
          (n.resultPage = 0),
          (n.searchPromise = null),
          (n.searchAbortController = null),
          (n.searchTerm = null),
          (n.searchLabel = null),
          (n.updateFtsAfterMsgLabelUpdate = function () {
            var e = n.currentLabelSearch;
            if (!r("isStringNullOrEmpty")(e)) {
              var t = n.filter(function (t) {
                return !t.labels || !t.labels.includes(e);
              });
              n.remove(t, { silent: !0 });
            }
          }),
          n.listenTo(t, "remove_msgs", function (e) {
            var t = n.remove(e, { silent: !0 }).filter(function (e) {
              return !!e;
            });
            t.length && n.trigger("bulk_remove");
          }),
          n.listenTo(
            o("WAWebChatCollection").ChatCollection,
            "remove",
            function (e) {
              var t = [];
              n.forEach(function (n) {
                n.id.remote.equals(e.id) && t.push(n);
              });
              var r = n.remove(t, { silent: !0 }).filter(function (e) {
                return !!e;
              });
              r.length && n.trigger("bulk_remove");
            },
          ),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.searchImpl = async function (t) {
          var e = t.chat,
            n = t.count,
            o = t.direction,
            a = t.filter,
            i = t.page,
            l = i === void 0 ? 1 : i,
            s = t.searchTerm;
          throw r("err")("searchImpl must be implemented");
        }),
        (n.onSeachPromiseComplete = function (t) {}),
        (n.delete = function (n) {
          (n && this.stopListening(), e.prototype.delete.call(this));
        }),
        (n.resetSearch = function () {
          var e;
          ((this.hasMoreMsgs = !0),
            (this.resultPage = 0),
            (this.searchTerm = null),
            (e = this.searchAbortController) == null || e.abort());
        }),
        (n.search = function (t) {
          var e = this,
            n = t.chat,
            a = t.count,
            i = t.filter,
            l = i === void 0 ? {} : i,
            s = t.searchTerm,
            u = t.direction,
            c = s + "__" + (l.label || (l.kind && l.kind) || "");
          this.currentLabelSearch = l.label;
          var d = !1,
            m = s !== this.searchTerm;
          if (
            (this.searchTerm !== c
              ? (this.searchTerm && s.indexOf(this.searchTerm) === 0
                  ? (d = !0)
                  : ((this.searchTerm = c), this.delete()),
                m && ((this.resultPage = 0), (this.hasMoreMsgs = !0)))
              : (d = !0),
            this.searchPromise)
          ) {
            var p;
            if (this.searchTerm === c) return this.searchPromise;
            (p = this.searchAbortController) == null || p.abort();
          }
          this.searchAbortController = new AbortController();
          var _ = this.searchAbortController.signal,
            f = this.searchImpl({
              chat: n,
              count: a,
              direction: u,
              filter: l,
              page: ++this.resultPage,
              searchTerm: s,
            });
          return (
            (this.searchPromise = r("WAPromiseRaceAbort")(f, _)
              .then(function (t) {
                return (
                  t.eof && (e.hasMoreMsgs = !1),
                  e.searchTerm !== c && m && e.delete(),
                  (e.searchTerm = c),
                  t.messages &&
                    ((l.kind || l.label != null) &&
                      (t.messages = t.messages.filter(function (e) {
                        return (
                          o("WAWebFrontendMsgGetters").getChat(e) &&
                          o("WAWebChatMessageSearch").matchFilter(
                            o("WAWebFrontendMsgGetters").getChat(e),
                            l,
                          )
                        );
                      })),
                    e.add(
                      t.messages.filter(function (e) {
                        return (
                          !o("WAWebFrontendMsgGetters").getAsRevoked(e) &&
                          o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                            o("WAWebViewMode.flow").ViewModeSurface.SEARCH,
                            e.viewMode,
                          )
                        );
                      }),
                    )),
                  e.onSeachPromiseComplete(d),
                  t
                );
              })
              .catch(
                o("WAAbortError").catchAbort(function () {
                  e.resultPage -= 1;
                }),
              )
              .finally(function () {
                ((e.searchPromise = null),
                  (e.searchAbortController = null),
                  e.trigger("searchPromise_update"));
              })),
            this.trigger("searchPromise_update"),
            this.searchPromise
          );
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    ((e.model = o("WAWebMsgModel").Msg), (l.default = e));
  },
  98,
);
