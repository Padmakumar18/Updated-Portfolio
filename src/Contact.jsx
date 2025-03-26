import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import RedditIcon from "@mui/icons-material/Reddit";
import Tooltip from "@mui/material/Tooltip";

export default function Contact() {
  return (
    <>
      <div className="Contact mt-20 mb-10">
        <p className="font-bold text-3xl mb-10 flex items-center justify-center">
          PROFILES
        </p>
        <div className="contacts flex justify-center gap-6">
          <Tooltip title="Email" arrow>
            <a
              href="mailto:padmakumar23.dev@gmail.com"
              target="_blank"
              className="hover:text-red-500 transition-transform duration-300 hover:scale-150"
            >
              <EmailIcon />
            </a>
          </Tooltip>

          <Tooltip title="LinkedIn" arrow>
            <a
              href="https://www.linkedin.com/in/-padma-kumar/"
              target="_blank"
              className="hover:text-blue-500 transition-transform duration-300 hover:scale-150"
            >
              <LinkedInIcon />
            </a>
          </Tooltip>

          <Tooltip title="GitHub" arrow>
            <a
              href="https://github.com/Padmakumar18"
              target="_blank"
              className="hover:text-white transition-transform duration-300 hover:scale-150"
            >
              <GitHubIcon />
            </a>
          </Tooltip>

          <Tooltip title="Reddit" arrow>
            <a
              href="https://www.reddit.com/user/Padma_kumar_/"
              target="_blank"
              className="hover:text-orange-500 transition-transform duration-300 hover:scale-150"
            >
              <RedditIcon />
            </a>
          </Tooltip>

          <Tooltip title="Stack Overflow" arrow>
            <a
              href="https://stackoverflow.com/users/29293839/padma-kumar"
              target="_blank"
              className="hover:text-red-500 transition-transform duration-300 hover:scale-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 256 256"
                fill="currentColor"
              >
                <g fill="currentColor" stroke="currentColor" strokeWidth="2">
                  <g transform="scale(5.12,5.12)">
                    <path d="M40.34375,1.96094l-2.48437,0.45703l3.32813,18.20703l1.98438,-0.30078zM29.0625,6.66406l-1.96094,1.41406l10.19922,14.95703l1.74609,-1.23828zM20.35156,15.50781l-1.23828,2.19531l15.38672,9.29688l1.16406,-1.99609zM16.16406,25.17188l-0.53516,2.23047l17.73047,4.49219l0.64063,-1.97266zM9,29v18.98438l29.90234,0.01563v-0.01562c0.03125,0 0.09766,-18.98437 0.09766,-18.98437h-2v17h-26v-17zM15.17188,33.375l-0.26953,1.96484l18.09766,1.66016l0.20313,-1.96484zM15,40v2l18,-0.07031v-1.92969z"></path>
                  </g>
                </g>
              </svg>
            </a>
          </Tooltip>

          <Tooltip title="LeetCode" arrow>
            <a
              href="https://leetcode.com/u/Padma_kumar/"
              target="_blank"
              className="hover:text-orange-500 transition-transform duration-300 hover:scale-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M 10.447266 0.265625 A 0.50005 0.50005 0 0 0 10.103516 0.41796875 L 5.65625 4.8671875 L 3.0957031 7.4257812 A 0.50005 0.50005 0 0 0 2.9785156 7.6035156 C 1.769869 8.9739016 1.7865696 11.063913 3.0957031 12.373047 L 5.65625 14.933594 C 7.0176322 16.294976 9.242133 16.294976 10.603516 14.933594 L 12.853516 12.683594 A 0.50063809 0.50063809 0 1 0 12.144531 11.976562 L 9.8945312 14.226562 C 8.9159134 15.20518 7.3418991 15.20518 6.3632812 14.226562 L 3.8027344 11.666016 C 2.8241166 10.687398 2.8241166 9.1114303 3.8027344 8.1328125 L 6.3632812 5.5742188 C 7.3418991 4.5956009 8.9159135 4.5956009 9.8945312 5.5742188 L 12.144531 7.8242188 A 0.50063784 0.50063784 0 1 0 12.853516 7.1171875 L 10.603516 4.8671875 C 9.9106907 4.174363 8.9943718 3.8431189 8.0820312 3.8554688 L 10.8125 1.125 A 0.50005 0.50005 0 0 0 10.447266 0.265625 z M 7.328125 9.4003906 A 0.50005 0.50005 0 1 0 7.328125 10.400391 L 14.228516 10.400391 A 0.50005 0.50005 0 1 0 14.228516 9.4003906 L 7.328125 9.4003906 z"></path>
              </svg>
            </a>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
