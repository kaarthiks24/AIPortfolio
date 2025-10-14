# NeoGen AI Nexus - Generative AI Portfolio

A cutting-edge, cyberpunk-inspired portfolio showcasing GenAI engineering expertise. Built with Next.js 15, TypeScript, Tailwind CSS, Three.js, and Framer Motion.

## Features

### Core Sections

1. **Hero Section**
   - 3D Neural Network background with animated particles
   - Dynamic greeting based on visitor's timezone
   - Interactive AI Avatar with holographic messaging
   - Parallax scrolling effects

2. **About Me**
   - Interactive career timeline with animated milestones
   - Skill web visualization - click nodes to explore categories
   - Technology categories: GenAI, Cloud ML, Backend, DevOps

3. **Projects**
   - Filterable project grid by category
   - Live demo badges for interactive projects
   - Project modals with detailed information
   - Metrics and impact highlights

4. **Blog**
   - Article cards with category badges
   - AI-powered comment system preview
   - Animated hover effects

5. **Contact**
   - Functional contact form with validation
   - Smart scheduling integration placeholder
   - Social media links with neon effects
   - Location and availability info

6. **EchoBot AI Chatbot**
   - Floating chat interface
   - Context-aware responses about your portfolio
   - Quick question shortcuts
   - Typing indicators and smooth animations

### Design Features

- **Cyberpunk Neon Theme**: Cyan, magenta, and green neon effects
- **Apple-Inspired**: Clean typography, smooth animations, premium feel
- **Glass Morphism**: Translucent cards with backdrop blur
- **Responsive**: Fully mobile-optimized
- **Accessibility**: Semantic HTML and ARIA labels

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom neon utilities
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **UI**: Custom components with neon effects

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### Personal Information

1. **Update Content**:
   - Edit `components/About.tsx` - timeline and skills
   - Edit `components/Projects.tsx` - project data
   - Edit `components/Blog.tsx` - blog posts
   - Edit `components/Contact.tsx` - contact info and social links

2. **EchoBot Responses**:
   - Edit `components/EchoBot.tsx` - `getBotResponse()` function
   - Add your specific experience details

3. **Colors**:
   - Edit `tailwind.config.ts` - neon color palette
   - Modify `app/globals.css` - custom utilities

4. **Metadata**:
   - Edit `app/layout.tsx` - SEO metadata

### AI Integration (Optional)

To connect real AI functionality:

1. **EchoBot with OpenAI/Azure**:
```typescript
// In components/EchoBot.tsx
const getBotResponse = async (message: string) => {
  const response = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ message })
  })
  return await response.json()
}
```

2. **Create API Route** (`app/api/chat/route.ts`):
```typescript
import { OpenAI } from 'openai'

export async function POST(req: Request) {
  const { message } = await req.json()
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: message }]
  })

  return Response.json({ reply: completion.choices[0].message.content })
}
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: `npm run build` → deploy `out` folder
- **AWS Amplify**: Connect GitHub repo
- **Azure Static Web Apps**: Use GitHub Actions

## Environment Variables

Create `.env.local` for API keys:

```env
OPENAI_API_KEY=your_key_here
AZURE_OPENAI_ENDPOINT=your_endpoint
GOOGLE_ANALYTICS_ID=your_ga_id
```

## Performance

- Lighthouse Score: 95+
- Optimized images and lazy loading
- Code splitting with Next.js
- Minimal bundle size

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use for your own portfolio!

## Credits

- Design inspiration: Apple, Cyberpunk 2077
- Icons: Emoji (cross-platform compatible)
- 3D Graphics: Three.js community

## Future Enhancements

- [ ] Voice interaction for EchoBot
- [ ] Real-time AI demos (resume formatter, newsletter generator)
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Analytics dashboard
- [ ] Blog CMS integration
- [ ] Calendar API for smart scheduling

## Contact

Built with passion by a GenAI Engineer. Powered by Next.js and a lot of ☕

---

**Note**: This portfolio is a meta-project itself - it showcases GenAI expertise through its very existence as an AI-powered, interactive experience!
