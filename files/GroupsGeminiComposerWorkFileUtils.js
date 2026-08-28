__d(
  "GroupsGeminiComposerWorkFileUtils",
  ["fbt", "ContentMultiAttachmentUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === o("ContentMultiAttachmentUtils").getMaxAllowedAttachments()
        ? s._(
            /*BTDS*/ '_j{"*":"Your upload couldn\'t be completed. You can only attach up to {number} files","_1":"Your upload couldn\'t be completed. You can only attach up to 1 file"}',
            [
              s._plural(
                o("ContentMultiAttachmentUtils").getMaxAllowedAttachments(),
                "number",
              ),
            ],
          )
        : s._(
            /*BTDS*/ '_j{"*":"Your upload couldn\'t be completed. You can only attach {number} more files","_1":"Your upload couldn\'t be completed. You can only attach 1 more file"}',
            [s._plural(e, "number")],
          );
    }
    l.uploadLimitExceededErrorMessage = e;
  },
  226,
);
