window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('js', new Date());
gtag('config', 'G-67Y423Q40S');

document.addEventListener('click', function (event) {
  var link = event.target.closest('a');
  if (!link) return;

  var href = link.getAttribute('href') || '';
  var label = (link.textContent || '').replace(/\s+/g, ' ').trim();

  if (href === 'dev-tool-kit.html') {
    gtag('event', 'click_dev_tool_kit', {
      link_url: href,
      link_text: label,
      page_location: window.location.href,
      transport_type: 'beacon'
    });
  }

  if (href === 'helper-commands.html') {
    gtag('event', 'click_helper_commands', {
      link_url: href,
      link_text: label,
      page_location: window.location.href,
      transport_type: 'beacon'
    });
  }

  if (href === 'git-learning.html') {
    gtag('event', 'click_git_learning', {
      link_url: href,
      link_text: label,
      page_location: window.location.href,
      transport_type: 'beacon'
    });
  }
});
