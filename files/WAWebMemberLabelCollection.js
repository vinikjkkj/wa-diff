__d(
  "WAWebMemberLabelCollection",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAWebBaseCollection",
    "WAWebIdentityFunction",
    "WAWebMemberLabelActions",
    "WAWebMemberLabelModel",
    "WAWebNullFunc",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.$MemberLabelCollection$p_1 = new Map()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$MemberLabelCollection$p_2 = function (t, n) {
            var e = this;
            t &&
              t.length > 0 &&
              t.filter(Boolean).forEach(function (t) {
                e.trigger(t.id.toString(), n(t));
              });
          }),
          (a.add = function (n, r) {
            var e = t.prototype.add.call(this, n, r);
            return (
              this.$MemberLabelCollection$p_2(
                e,
                o("WAWebIdentityFunction").identityFunction,
              ),
              e
            );
          }),
          (a.remove = function (n, r) {
            r === void 0 && (r = {});
            var e = t.prototype.remove.call(this, n, r);
            return (
              this.$MemberLabelCollection$p_2(e, o("WAWebNullFunc").returnNull),
              e
            );
          }),
          (a.initializeLabelsForChat = async function (t) {
            var e = this.$MemberLabelCollection$p_1.get(t);
            if (e != null) return e;
            var n = this.$MemberLabelCollection$p_3(t);
            return (this.$MemberLabelCollection$p_1.set(t, n), n);
          }),
          (a.$MemberLabelCollection$p_3 = async function (n) {
            var t = this;
            try {
              await o("WAExponentialBackoff").exponentialBackoff(
                {
                  minTimeout: 1e3,
                  retries: 3,
                  signal: new AbortController().signal,
                },
                async function (a, i) {
                  return o("WAWebMemberLabelActions")
                    .getMemberLabelsForGroupAction(n)
                    .then(function (e) {
                      e != null && t.add(e);
                    })
                    .catch(function (t) {
                      o("WALogger").ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[MemberLabelCollection][initialize]: Attempt ",
                            " failed for group ",
                            "",
                          ])),
                        i + 1,
                        n,
                      );
                      var l = t instanceof Error ? t : r("err")(String(t));
                      return a(l);
                    });
                },
              );
            } catch (e) {
              (o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MemberLabelCollection][initialize]: All retries failed for group ",
                    "",
                  ])),
                n,
              ),
                this.$MemberLabelCollection$p_1.delete(n));
            }
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    u.model = r("WAWebMemberLabelModel");
    var c = new u();
    l.default = c;
  },
  98,
);
