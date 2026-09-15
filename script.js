const items=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');observer.unobserve(entry.target)}}),{threshold:.12});items.forEach(item=>observer.observe(item));}else items.forEach(item=>item.classList.add('show'));
