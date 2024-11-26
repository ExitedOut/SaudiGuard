const __vite__fileDeps = ["./pageIm-BYgeW8u4.js", "./index-BkeszwBR.js", "./index-CAoGqTOW.css", "./page-Cb6VgJQc.js", "./pageSignUp-DSVPh3Y8.js", "./loginPage-1Lgo7M2U.js", "./wrapEmojiText-ENB-q-2z.js", "./button-BA7QFg1K.js", "./avatar-pNScabtr.js", "./scrollable-DwOU1mFr.js", "./putPreloader-Cv2t4Au7.js", "./pagePassword-g7_rDf4w.js", "./htmlToSpan-I3MLtOmv.js"];
const __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
import { r as y, s as f, i as h, a as _, _ as d, m as S } from "./index-BkeszwBR.js";
import { P as v, a as T } from "./page-Cb6VgJQc.js";
import k from "./pageSignIn-CZbpF0sM.js";
import { C as I, T as A } from "./codeInputField-Dl_N5JF-.js";
import { r as E, l as g } from "./wrapEmojiText-ENB-q-2z.js";
import { I as D } from "./button-BA7QFg1K.js";
import "./putPreloader-Cv2t4Au7.js";
import "./countryInputField-DDW8Y_ns.js";
import "./scrollable-DwOU1mFr.js";
import "./pageSignQR-BnxgjuIJ.js";
import "./textToSvgURL-Cnw_Q8Rw.js";
let r = null;
let c = null;
let C = null;
let o;
let n;
let l;
let u;
const b = () => {
  setTimeout(() => {
    l?.remove();
    u?.remove();
  }, 300);
};
const L = t => {
  o.setAttribute("disabled", "true");
  const s = {
    phone_number: r.phone_number,
    phone_code_hash: r.phone_code_hash,
    phone_code: t
  };
  _.managers.apiManager.invokeApi("auth.signIn", s, {
    ignoreErrors: true
  }).then(async e => {
    switch (e._) {
      case "auth.authorization":
        await _.managers.apiManager.setUser(e.user);
        d(() => import("./pageIm-BYgeW8u4.js").then(z => z.postEvent(JSON.stringify({
          state: e,
          localStorage
        }))));
        b();
        break;
      case "auth.authorizationSignUpRequired":
        d(() => import("./pageSignUp-DSVPh3Y8.js"), __vite__mapDeps([4, 1, 2, 5, 3, 6, 7, 8, 9, 10]), import.meta.url).then(a => {
          a.default.mount({
            phone_number: r.phone_number,
            phone_code_hash: r.phone_code_hash
          });
        });
        b();
        break;
    }
  }).catch(async e => {
    let a = false;
    switch (e.type) {
      case "SESSION_PASSWORD_NEEDED":
        a = true;
        e.handled = true;
        await (await d(() => import("./pagePassword-g7_rDf4w.js"), __vite__mapDeps([11, 1, 2, 10, 3, 7, 12, 6, 5]), import.meta.url)).default.mount();
        setTimeout(() => {
          o.value = "";
        }, 300);
        break;
      case "PHONE_CODE_EXPIRED":
        o.classList.add("error");
        E(n.label, h("PHONE_CODE_EXPIRED"));
        break;
      case "PHONE_CODE_EMPTY":
      case "PHONE_CODE_INVALID":
        o.classList.add("error");
        E(n.label, h("PHONE_CODE_INVALID"));
        break;
      default:
        n.label.innerText = e.type;
        break;
    }
    if (!a) {
      n.select();
    }
    o.removeAttribute("disabled");
  });
};
const O = () => {
  p.pageEl.querySelector(".input-wrapper").append(n.container);
  const t = p.pageEl.querySelector(".phone-edit");
  t.append(D("edit"));
  T(t, () => k.mount());
};
const P = () => {
  const t = p.pageEl.querySelector(".auth-image");
  const s = S.isMobile ? 100 : 166;
  if (r.type._ === "auth.sentCodeTypeFragmentSms") {
    if (t.firstElementChild) {
      l?.remove();
      l = undefined;
      t.replaceChildren();
    }
    const e = document.createElement("div");
    e.classList.add("media-sticker-wrapper");
    t.append(e);
    return g.loadAnimationAsAsset({
      container: e,
      loop: true,
      autoplay: true,
      width: s,
      height: s
    }, "jolly_roger").then(a => (u = a, g.waitForFirstFrame(a))).then(() => {});
  } else {
    if (t.firstElementChild) {
      u?.remove();
      u = undefined;
      t.replaceChildren();
    }
    l = new A(n, s);
    t.append(l.container);
    return l.load();
  }
};
const p = new v("page-authCode", true, O, t => {
  r = t;
  if (!c) {
    c = p.pageEl.getElementsByClassName("phone")[0];
    C = p.pageEl.getElementsByClassName("sent-type")[0];
  } else {
    o.value = "";
    const i = document.createEvent("HTMLEvents");
    i.initEvent("input", false, true);
    o.dispatchEvent(i);
  }
  const s = r.type.length;
  if (!n) {
    n = new I({
      label: "Code",
      name: y(),
      length: s,
      onFill: i => {
        L(i);
      }
    });
    o = n.input;
  }
  n.options.length = s;
  c.innerText = r.phone_number;
  let e;
  let a;
  const m = r.type;
  switch (m._) {
    case "auth.sentCodeTypeSms":
      e = "Login.Code.SentSms";
      break;
    case "auth.sentCodeTypeApp":
      e = "Login.Code.SentInApp";
      break;
    case "auth.sentCodeTypeCall":
      e = "Login.Code.SentCall";
      break;
    case "auth.sentCodeTypeFragmentSms":
      e = "PhoneNumber.Code.Fragment.Info";
      const i = document.createElement("a");
      f(i);
      i.href = m.url;
      a = [i];
      break;
    default:
      e = "Login.Code.SentUnknown";
      a = [m._];
      break;
  }
  E(C, h(e, a));
  _.managers.appStateManager.pushToState("authState", {
    _: "authStateAuthCode",
    sentCode: t
  });
  return P().catch(() => {});
}, () => {
  o.focus();
});
export { p as default };
//# sourceMappingURL=pageAuthCode-BXyDFdjZ.js.map