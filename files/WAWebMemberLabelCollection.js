__d(
  "WAWebMemberLabelCollection",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAWebBaseCollection",
    "WAWebMemberLabelActions",
    "WAWebMemberLabelModel",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.$MemberLabelCollection$p_1 = new Map()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.$MemberLabelCollection$p_2 = function (t, n) {
            var e = this;
            t &&
              t.length > 0 &&
              t.filter(Boolean).forEach(function (t) {
                e.trigger(t.id.toString(), n(t));
              });
          }),
          (i.add = function (n, r) {
            var e = t.prototype.add.call(this, n, r);
            return (
              this.$MemberLabelCollection$p_2(e, function (e) {
                return e;
              }),
              e
            );
          }),
          (i.remove = function (n, r) {
            r === void 0 && (r = {});
            var e = t.prototype.remove.call(this, n, r);
            return (
              this.$MemberLabelCollection$p_2(e, o("WAWebNullFunc").returnNull),
              e
            );
          }),
          (i.initializeLabelsForChat = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this.$MemberLabelCollection$p_1.get(e);
                if (t != null) return t;
                var n = this.$MemberLabelCollection$p_3(e);
                return (this.$MemberLabelCollection$p_1.set(e, n), n);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$MemberLabelCollection$p_3 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this;
                try {
                  yield o("WAExponentialBackoff").exponentialBackoff(
                    {
                      minTimeout: 1e3,
                      retries: 3,
                      signal: new AbortController().signal,
                    },
                    (function () {
                      var i = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (n, i) {
                          return o("WAWebMemberLabelActions")
                            .getMemberLabelsForGroupAction(t)
                            .then(function (e) {
                              e != null && a.add(e);
                            })
                            .catch(function (a) {
                              o("WALogger").ERROR(
                                e ||
                                  (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "[MemberLabelCollection][initialize]: Attempt ",
                                    " failed for group ",
                                    "",
                                  ])),
                                i + 1,
                                t,
                              );
                              var l =
                                a instanceof Error ? a : r("err")(String(a));
                              return n(l);
                            });
                        },
                      );
                      return function (e, t) {
                        return i.apply(this, arguments);
                      };
                    })(),
                  );
                } catch (e) {
                  (o("WALogger").ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[MemberLabelCollection][initialize]: All retries failed for group ",
                        "",
                      ])),
                    t,
                  ),
                    this.$MemberLabelCollection$p_1.delete(t));
                }
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    u.model = r("WAWebMemberLabelModel");
    var c = new u();
    l.default = c;
  },
  98,
);
