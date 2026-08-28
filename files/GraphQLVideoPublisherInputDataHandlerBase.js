__d(
  "GraphQLVideoPublisherInputDataHandlerBase",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.postData = e), (this.extraData = t));
      }
      var t = e.prototype;
      return (
        (t.mapPostDataToGraphQLInputObject = function () {
          s(0, 85);
        }),
        (t.hasAPISupport = function () {
          return u(this.postData);
        }),
        (t.uploadables = function () {
          s(0, 85);
        }),
        e
      );
    })();
    function u(e) {
      return !0;
    }
    ((l.GraphQLVideoPublisherInputDataHandlerBase = e), (l.hasAPISupport = u));
  },
  98,
);
