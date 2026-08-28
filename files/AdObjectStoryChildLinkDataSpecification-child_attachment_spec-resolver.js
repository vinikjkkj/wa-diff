__d(
  "AdObjectStoryChildLinkDataSpecification-child_attachment_spec-resolver",
  [
    "AdObjectStoryChildAttachmentSpecUtil",
    "AdObjectStoryChildLinkDataSpecificationChildAttachmentSpecResolver.graphql",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n(
              "AdObjectStoryChildLinkDataSpecificationChildAttachmentSpecResolver.graphql",
            )),
        t,
      );
      return o(
        "AdObjectStoryChildAttachmentSpecUtil",
      ).coerceGraphQLSpecToGraphAPI(r);
    }
    l.child_attachment_spec = s;
  },
  98,
);
